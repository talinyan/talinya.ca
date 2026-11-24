import Fastify from 'fastify';
import cors from '@fastify/cors';

if (!process.env.CORS_ORIGIN) throw new Error('CORS_ORIGIN is not set');

const app = Fastify({ logger: true });
await app.register(cors, { origin: [process.env.CORS_ORIGIN, /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/] });

class InputError extends Error {}
class UpstreamError extends Error {}

app.setErrorHandler((err, request, reply) => {
	if (err instanceof InputError) {
		return reply.code(400).send({ error: err.message });
	}

	if (err.statusCode && err.statusCode < 500) {
		return reply.code(err.statusCode).send({ error: err.message });
	}

	request.log.error(err);
	const code = err instanceof UpstreamError ? 502 : 500;
	return reply.code(code).send({ error: code === 502 ? 'Upstream request failed.' : 'Internal error.' });
});

app.post('/workshop-stats', async (request) => {
	const ids = request.body?.ids;

	if (!Array.isArray(ids) || ids.length === 0) throw new InputError('Must contain at least 1 id.');
	if (ids.length > 100) throw new InputError('Max 100 ids.');

	const params = { itemcount: ids.length.toString() };
	ids.forEach((id, idx) => {
		params[`publishedfileids[${idx}]`] = String(id);
	});

	let data;
	try {
		const res = await fetch('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(params),
			signal: AbortSignal.timeout(10_000)
		});
		if (!res.ok) throw new Error(`status ${res.status}`);
		data = await res.json();
	} catch (cause) {
		throw new UpstreamError('Steam API request failed', { cause });
	}
	const details = data?.response?.publishedfiledetails ?? [];

	const items = details
		.filter((d) => d.result === 1)
		.map((d) => ({
			id: d.publishedfileid,
			title: d.title,
			faves: d.lifetime_favorited ?? 0,
			subs: d.lifetime_subscriptions ?? 0,
			views: d.views ?? 0
		}));

	const total = items.reduce(
		(sum, i) => ({
			faves: sum.faves + i.faves,
			subs: sum.subs + i.subs,
			views: sum.views + i.views
		}),
		{ faves: 0, subs: 0, views: 0 }
	);

	return { total, items };
});

await app.listen({ host: '0.0.0.0', port: Number(process.env.PORT) || 3000 });
