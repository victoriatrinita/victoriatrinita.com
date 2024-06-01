export const load: import('./$types').PageLoad = async ({ fetch }) => {
	const articles = await fetch('/about.json').then((r) => r.json());
	return {
		post: articles.index,
		meta: {
			title: 'About'
		}
	};
};
