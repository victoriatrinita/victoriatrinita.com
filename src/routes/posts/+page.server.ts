// // import { parseDirByLanguage } from '$lib/utils/parser';
// // import type { PageServerLoad } from './$types';
// // import type { Post } from '$lib/types';

// // export const load: PageServerLoad = async () => {
// // 	function hydrate(data: Post, article: string, filename: string): Post | null {
// // 		const [slug] = filename.split('.');
// // 		return { slug, ...data, content: article };
// // 	}

// // 	const posts = parseDirByLanguage('content/posts', hydrate);

// // 	return {
// // 		posts,
// // 		meta: {
// // 			title: 'Posts'
// // 		}
// // 	};
// // };

// import { parseDirByLanguage } from '$lib/utils/parser';
// import type { PageServerLoad } from './$types';
// import type { Post } from '$lib/types';

// export const load: PageServerLoad = async () => {
// 	// Note: 'data' here is the frontmatter from YAML.parse
// 	function hydrate(data: any, article: string, filename: string): any {
// 		// We no longer use filename as the slug because filename is 'en.md'
// 		// We prioritize the 'slug' field in frontmatter, falling back to null
// 		// The parser will handle the final fallback to folder name.
// 		return {
// 			...data,
// 			content: article
// 		};
// 	}

// 	const posts = parseDirByLanguage('content/posts', hydrate);

// 	return {
// 		posts,
// 		meta: {
// 			title: 'Posts'
// 		}
// 	};
// };

import { parseDirByLanguage } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	/**
	 * @param data - The parsed frontmatter
	 * @param article - The markdown body
	 * @param filename - e.g., 'en.md'
	 */
	function hydrate(data: any, article: string, filename: string): any {
		return {
			...data,
			// We keep the raw content here; the parser handles marker.render
			content: article
		};
	}

	const posts = parseDirByLanguage('content/posts', hydrate);

	return {
		posts,
		meta: {
			title: 'Posts'
		}
	};
};
