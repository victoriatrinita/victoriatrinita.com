import { parseDir } from '$lib/utils/parser';
import type { Post } from '$lib/types';

export async function load() {
	function hydrate(data: Post, _: string, filename: string): Post | null {
		const [slug] = filename.split('.');
		return { slug, ...data };
	}

	const recentPosts = parseDir('content/posts', hydrate);
	// const recentHaikus = parseDir('content/haikus', hydrate);
	// const recentCooklogs = parseDir('content/cooklog', hydrate);

	return {
		recentPosts,
		// recentHaikus,
		// recentCooklogs,
		meta: {
			title: 'Victoria Trinita Pardede'
		}
	};
}
