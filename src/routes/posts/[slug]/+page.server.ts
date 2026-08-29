import { error } from '@sveltejs/kit';
import { parseDirByLanguage } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// 1. Get all grouped posts
	const allPosts = parseDirByLanguage('content/posts', (data: any, content: string) => ({
		...data,
		content
	}));

	// 2. Find the post and specific translation matching this slug
	let foundPost = null;
	let activeLocale = '';

	for (const post of allPosts) {
		// Look through translations (en, id, ja, etc.)
		for (const [locale, translation] of Object.entries(post.translations)) {
			// Match by custom slug OR folder ID
			if (translation.slug === slug || (locale === 'id' && post.id === slug)) {
				foundPost = post;
				activeLocale = locale;
				break;
			}
		}
		if (foundPost) break;
	}

	if (!foundPost) {
		throw error(404, 'Post not found');
	}

	// 3. Prepare the "Switch Language" map for the UI
	const languageSwitcher = Object.entries(foundPost.translations).map(([locale, trans]) => ({
		locale,
		slug: trans.slug || foundPost.id,
		title: trans.title
	}));

	return {
		post: foundPost.translations[activeLocale],
		metadata: {
			tags: foundPost.tags,
			date_published: foundPost.date_published,
			date_updated: foundPost.date_updated
		},
		activeLocale,
		languageSwitcher
	};
};
