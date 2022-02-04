import { parseDir } from '../../utils/parser';

export async function get(_: Request, res: Response) {
	const articles = parseDir('content/about', (data: any, content: string, filename: string) => {
		const [slug] = filename.split('.');
		return { slug, ...data, content };
	}).reduce((acc, cur) => {
		const { slug, ...res } = cur;
		return { ...acc, [slug]: res };
	}, {});

	if (articles) {
		return {
			body: articles
		};
	}

	return {
		status: 404
	};
}
