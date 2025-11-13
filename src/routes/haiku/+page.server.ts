import type { PageServerLoad } from './$types';
import { join } from 'path';
import { readdirSync } from 'fs';

export const load: PageServerLoad = () => {
	const dates = getDates();
	return {
		dates,
		meta: {
			title: `Haiku`
		}
	};
};

function getDates(): { year: string; month: string }[] {
	const base = join('content', 'haiku');
	const years = readdirSync(base);
	const dates: { year: string; month: string }[] = [];

	for (const y of years) {
		const ym = readdirSync(join(base, y));
		for (const m of ym) {
			dates.push({ year: y, month: m });
		}
	}

	return dates.sort((a, b) =>
		a.year === b.year ? b.month.localeCompare(a.month) : b.year.localeCompare(a.year)
	);
}
