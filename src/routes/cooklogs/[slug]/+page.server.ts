import { parseFileCooklog } from '$lib/utils/parser';
import { VITE_PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// We use a larger width for the Detail page hero (1200px)
	const CLOUDINARY_HERO = `https://res.cloudinary.com/${VITE_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_1200/`;
	// And a medium width for the log history photos
	const CLOUDINARY_LOG = `https://res.cloudinary.com/${VITE_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_800/`;

	function hydrate(data: any, content: string, filename: string) {
		// Validation: Ensure the file slug matches the URL
		const filenameSlug = filename.replace('.md', '');
		if (filenameSlug !== slug) return null;

		// 1. Process Hero Image
		if (data.image && !data.image.startsWith('http')) {
			const cleanId = data.image
				.split('/')
				.pop()
				.replace(/\.[^/.]+$/, '');
			data.image = `${CLOUDINARY_HERO}${cleanId}`;
		}

		// 2. Process Nested Cook Logs
		if (data.cook_logs && Array.isArray(data.cook_logs)) {
			data.cook_logs = data.cook_logs.map((log: any) => ({
				...log,
				// Ensure images is always an array, and transform each ID
				images: (Array.isArray(log.images) ? log.images : []).map((imgId: string) =>
					imgId.startsWith('http') ? imgId : `${CLOUDINARY_LOG}${imgId}`
				)
			}));
		}

		return { ...data, slug, content };
	}

	try {
		const post = parseFileCooklog(`content/cooklogs/${slug}.md`, hydrate);

		if (!post) throw error(404, 'Post not found');

		return { post };
	} catch (e) {
		throw error(404, 'Cooklog entry not found');
	}
};
