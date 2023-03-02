import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { parseDir } from '$lib/utils/parser';

export const GET: RequestHandler = async () => {
	const articles = parseDir('content/about', (data: any, content: string, filename: string) => {
		const [slug] = filename.split('.');
		return { slug, ...data, content };
	}).reduce((acc, cur) => {
		const { slug, ...res } = cur;
		return { ...acc, [slug]: res };
	}, {});

	if (articles) {
		return json(articles);
	}

	return new Response(undefined, { status: 404 });
};
