import type { PageServerLoad } from './$types';
import { getDates } from './haiku.server';

export const load: PageServerLoad = () => {
	const dates = getDates();
	return {
		dates,
		meta: {
			title: `Haiku`
		}
	};
};
