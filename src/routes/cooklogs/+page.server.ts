import { parseCooklogDir } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';
import { VITE_PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const CLOUDINARY_BASE = `https://res.cloudinary.com/${VITE_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;
	// This function runs for EVERY file found in the directory
	function hydrate(data: any, content: string, filename: string) {
		// Create the slug from the filename (e.g., "034-sakusaku...")
		const slug = filename.replace('.md', '');

		// Transform the main thumbnail for the list view
		if (data.image && !data.image.startsWith('http')) {
			// Clean up old paths like '/images/cooklog/' if they exist
			const cleanId = data.image
				.split('/')
				.pop()
				.replace(/\.[^/.]+$/, '');
			data.image = `${CLOUDINARY_BASE}${cleanId}.jpg`;
		} else if (data.image_id) {
			// If you moved to using image_id as we discussed
			data.image = `${CLOUDINARY_BASE}${data.image_id}.jpg`;
		}

		return {
			...data,
			slug,
			// We don't usually need the full content for the list page
			// but we keep it if you want to show snippets
			content
		};
	}

	// Use the Directory parser instead of the File parser
	const cooklogs = parseCooklogDir('content/cooklogs', hydrate);

	return {
		cooklogs
	};
};
