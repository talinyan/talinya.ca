import Fastify from 'fastify';
import cors from '@fastify/cors';
import { getWorkshopStats } from './getWorkshopStats';

const app = Fastify();

(async () => {
	await app.register(cors, {
		origin: ['https://talinya.ca', 'https://www.talinya.ca', 'http://localhost:5173', 'http://127.0.0.1:5173'],
		methods: ['POST', 'OPTIONS']
	});
})();

app.post('/api/steamstats', getWorkshopStats);
app.get('/api/health', async () => ({ ok: true })); // sanity check
app.get('/api/health2', async () => ({ ok: true })); // sanity check

const start = async () => {
	const port = 5000;
	const host = '127.0.0.1';

	try {
		await app.listen({ port, host });
		console.log(`Listening on ${host}:${port}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
start();
