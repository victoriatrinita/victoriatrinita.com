import { env } from '$env/dynamic/private';
import { parseCooklogDir } from '$lib/utils/parser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	meta: { title: 'Cooklogs' },
	cooklogs: parseCooklogDir('content/cooklogs', hydrateCooklog)
});

type CooklogFrontmatter = {
	image?: string;
	image_id?: string;
	[key: string]: unknown;
};

type CooklogEntry = CooklogFrontmatter & {
	slug: string;
	content: string;
};

const cloudName = env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${cloudName}/image/upload/`;

function toCloudinaryUrl(imageId: string) {
	return `${CLOUDINARY_BASE_URL}${imageId}.jpg`;
}

function hydrateCooklog(data: CooklogFrontmatter, content: string, filename: string): CooklogEntry {
	const slug = filename.replace(/\.md$/, '');
	const hydratedData = { ...data };

	if (typeof hydratedData.image === 'string' && !hydratedData.image.startsWith('http')) {
		const cleanImageId = hydratedData.image
			.split('/')
			.pop()
			?.replace(/\.[^/.]+$/, '');
		hydratedData.image = cleanImageId ? toCloudinaryUrl(cleanImageId) : hydratedData.image;
	} else if (typeof hydratedData.image_id === 'string') {
		hydratedData.image = toCloudinaryUrl(hydratedData.image_id);
	}

	return {
		...hydratedData,
		slug,
		content
	};
}
