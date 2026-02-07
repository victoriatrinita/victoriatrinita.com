import { parseDirBooks } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';
import type { Book } from '$lib/types';

export const load: PageServerLoad = async () => {
	function hydrate(data: Book, _: string, filename: string): Book | null {
		const [slug] = filename.split('.');
		return { slug, ...data };
	}

	const books = parseDirBooks('content/books', hydrate);

	return {
		books,
		meta: {
			title: 'Books'
		}
	};
};
