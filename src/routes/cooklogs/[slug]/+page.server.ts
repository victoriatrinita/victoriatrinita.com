import { parseFileCooklog } from '$lib/utils/parser';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const cloudName = env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';
	const CLOUDINARY_HERO = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1200/`;
	const CLOUDINARY_LOG = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_800/`;

	function hydrate(data: any, content: string, filename: string) {
		const filenameSlug = filename.replace('.md', '');
		if (filenameSlug !== slug) return null;

		if (data.image && !data.image.startsWith('http')) {
			const cleanId = data.image
				.split('/')
				.pop()
				.replace(/\.[^/.]+$/, '');
			data.image = `${CLOUDINARY_HERO}${cleanId}`;
		}

		if (data.cook_logs && Array.isArray(data.cook_logs)) {
			data.cook_logs = data.cook_logs.map((log: any) => ({
				...log,
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

		return {
			meta: { title: post.title ? String(post.title) : 'Cooklog' },
			post
		};
	} catch (e) {
		throw error(404, 'Cooklog entry not found');
	}
};
