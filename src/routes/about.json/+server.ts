import { json } from '@sveltejs/kit';

// @migration task: Check imports
import { parseDir } from '../../utils/parser';

export async function GET(_: Request, res: Response) {
	const articles = parseDir('content/about', (data: any, content: string, filename: string) => {
		const [slug] = filename.split('.');
		return { slug, ...data, content };
	}).reduce((acc, cur) => {
		const { slug, ...res } = cur;
		return { ...acc, [slug]: res };
	}, {});

	if (articles) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json(articles);
		return {
			body: articles
		};
	}

	return new Response(undefined, { status: 404 });
}
