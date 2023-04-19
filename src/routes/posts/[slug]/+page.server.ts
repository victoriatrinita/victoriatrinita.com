import { parseFile } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';

interface RawPost {
	title: string;
	tags: string[];
	language: string;
	description?: string;
	date?: { updated?: string | Date };
}

declare class FinalPost implements RawPost {
	slug: string;
	title: string;
	tags: string[];
	language: string;
	description?: string;
	date: {
		published: string | Date;
		updated?: string | Date;
	};
	content?: string;
}

export const load: PageServerLoad = async ({ params }) => {
	const slug = params['slug'];

	function hydrate(data: FinalPost, content: string, filename: string): FinalPost | null {
		const [filename_slug] = filename.split('.');
		if (filename_slug !== slug) return null;
		const date = {
			published: data.date && data.date.published,
			updated: data.date && data.date.updated
		};

		return { ...data, slug, date, content };
	}

	const post = parseFile(`content/posts/${slug}.md`, hydrate);

	return {
		post
	};
};
