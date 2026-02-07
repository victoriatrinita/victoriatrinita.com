import { parseFile } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';
import type { Book } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params['slug'];

	function hydrate(data: Book, content: string, filename: string): Book | null {
		const [filename_slug] = filename.split('.');
		if (filename_slug !== slug) return null;

		return { ...data, slug, content };
	}

	const book = parseFile(`content/books/${slug}.md`, hydrate);

	return {
		book,
		meta: {
			title: book.title
		}
	};
};
