import type { PageServerLoad } from './$types';
import { join } from 'path';
import { parseDirHaikus } from '$lib/utils/parser';
import type { Haiku } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	function hydrate(data: Haiku, filename: string): Haiku | null {
		const [slug] = filename.split('.');
		const date = formatDate(slug);

		return { ...data, slug, date };
	}

	function getByMonth(year: string, month: string): Haiku[] {
		const dir = join('content', 'haiku', year, month);
		console.log('dir');
		console.log(dir);

		return parseDirHaikus(dir, hydrate);
	}

	const { year, month } = params;
	const items = getByMonth(year, month);
	return {
		year,
		month,
		items,
		meta: {
			title: `Haiku ${year}.${month}`
		}
	};
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
