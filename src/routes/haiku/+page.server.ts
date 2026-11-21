import type { PageServerLoad } from './$types';
import { join } from 'path';
import { readdirSync } from 'fs';

export const load: PageServerLoad = () => {
	const dates = getDates();
	// const groupedDates = getGroupedDates(dates);

	return {
		dates,
		// groupedDates,
		meta: {
			title: `Haiku`
		}
	};
};

function getDates(): { year: string; month: string }[] {
	const base = join('content', 'haiku');
	const years = readdirSync(base, { withFileTypes: true });
	const dates: { year: string; month: string }[] = [];

	for (const year of years) {
		if (!year.isDirectory() || !/^\d{4}$/.test(year.name)) continue;
		const months = readdirSync(join(base, year.name), { withFileTypes: true });
		for (const month of months) {
			if (!month.isDirectory() || !/^(0[1-9]|1[0-2])$/.test(month.name)) continue;
			dates.push({ year: year.name, month: month.name });
		}
	}

	return dates.sort((a, b) =>
		a.year === b.year ? b.month.localeCompare(a.month) : b.year.localeCompare(a.year)
	);
}

// function getGroupedDates(dates: { year: string; month: string }[]) {
// 	const grouped = new Map<string, { year: string; month: string }[]>();

// 	for (const date of dates) {
// 		const existing = grouped.get(date.year) ?? [];
// 		existing.push(date);
// 		grouped.set(date.year, existing);
// 	}

// 	return Array.from(grouped.entries())
// 		.sort(([a], [b]) => b.localeCompare(a))
// 		.map(([year, months]) => ({ year, months }));
// }
