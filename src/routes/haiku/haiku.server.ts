import { join } from 'path';
import { parseDir } from '$lib/utils/parser';
import { readdirSync } from 'fs';

export type Haiku = {
	slug: string;
	date: string;
	content: string;
};

function formatDate(input: string, locale = 'en-US'): string {
	const [y, m, d] = input.split('-').map(Number);
	const date = new Date(y, m - 1, d);
	if (isNaN(date.getTime())) throw new Error(`Invalid date: ${input}`);
	const weekday = new Intl.DateTimeFormat(locale, {
		weekday: 'short',
		timeZone: 'Asia/Tokyo'
	}).format(date);

	const yyyy = String(y);
	const mm = String(m).padStart(2, '0');
	const dd = String(d).padStart(2, '0');

	return `${weekday}, ${yyyy}.${mm}.${dd}`;
}

function hydrateHaiku(_frontMatter: any, content: string, filename: string): Haiku {
	const slug = filename.replace(/\.md$/, '');
	const date = formatDate(slug);
	return {
		slug,
		date,
		content
	};
}

export function getByMonth(year: string, month: string): Haiku[] {
	const dir = join('content', 'haiku', year, month);
	return parseDir(dir, hydrateHaiku).sort((a: Haiku, b: Haiku) => (a.slug > b.slug ? 1 : -1));
}

export function getDates(): { year: string; month: string }[] {
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
