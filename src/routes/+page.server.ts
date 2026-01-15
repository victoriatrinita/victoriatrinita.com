import { parseDir, parseCooklogDir, parseLatestHaikuDir } from '$lib/utils/parser';
import type { Post, Haiku } from '$lib/types';

export async function load() {
	function hydrate(data: Post, _: string, filename: string): Post | null {
		const [slug] = filename.split('.');
		return { slug, ...data };
	}

	const recentPosts = parseDir('content/posts', hydrate);
	const recentHaikus: Haiku[] = parseLatestHaikuDir('content/haiku').slice(0, 3);
	const recentCooklogs = parseCooklogDir('content/cooklogs', hydrate).slice(0, 3);

	return {
		recentPosts,
		recentHaikus,
		recentCooklogs,
		meta: {
			title: 'Victoria Trinita Pardede'
		}
	};
}
