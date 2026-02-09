export const getWorkshopStats = async (request: any, reply: any) => {
	const { ids } = request.body;

	if (ids.length === 0) {
		return reply.code(401).send({ error: 'Must contain at least 1 id.' });
	}

	let params: any = {
		itemcount: ids.length.toString()
	};

	ids.forEach((id: string, idx: number) => {
		params[`publishedfileids[${idx}]`] = id;
	});

	const body = new URLSearchParams(params);

	const res = await fetch('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	});

	let faves = 0;
	let subs = 0;
	let views = 0;

	const data = await res.json();
	data.response.publishedfiledetails.forEach((d: any) => {
		faves += d['lifetime_favorited'];
		subs += d['lifetime_subscriptions'];
		views += d['views'];
	});

	return { faves, subs, views };
};
