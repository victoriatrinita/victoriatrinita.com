import { parseDirVerses } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';
import type { Verse } from '$lib/types';

export const load: PageServerLoad = async () => {
	function hydrate(data: Verse, filename: string): Verse | null {
		const [slug] = filename.split('.');
		return { slug, ...data };
	}

	const verses = parseDirVerses('content/verses', hydrate);

	return {
		verses,
		meta: {
			title: 'Verses'
		}
	};
};
