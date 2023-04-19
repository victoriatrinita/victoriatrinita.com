import type { PageServerLoad } from './$types';
import { parseDir } from '$lib/utils/parser';

export const load: PageServerLoad = async () => {
	function hydrate(data: any, _: string, filename: string): any {
		const [slug] = filename.split('.');
		return { slug, ...data };
	}

	const posts = parseDir('content/posts', hydrate);

	return {
		posts
	};
};
