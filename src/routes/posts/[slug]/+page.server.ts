import { parseFile } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params['slug'];

	function hydrate(data: Post, content: string, filename: string): Post | null {
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
