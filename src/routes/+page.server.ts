import { parseDir } from '$lib/utils/parser';
import type { Post } from '$lib/types';

export async function load() {
	function hydrate(data: Post, _: string, filename: string): Post | null {
		const [slug] = filename.split('.');
		return { slug, ...data };
	}

	const posts = parseDir('content/posts', hydrate);

	return {
		posts
	};
}
