import type { PageServerLoad } from './$types';
import { getByMonth } from '../../haiku.server';

export const load: PageServerLoad = async ({ params }) => {
	const { year, month } = params;
	const items = getByMonth(year, month);
	return { year, month, items };
};
