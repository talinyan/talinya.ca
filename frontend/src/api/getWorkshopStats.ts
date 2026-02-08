import { API_URL } from '../config';

export const getWorkshopStats = async (ids: string[]) => {
	const res = await fetch(`${API_URL}/api/steamstats`, {
		headers: { 'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({ ids })
	});
	const data = await res.json();
	return data;
};
