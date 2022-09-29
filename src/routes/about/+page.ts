export async function load({ fetch }) {
	const articles = await fetch('/about.json').then((r) => r.json());
	return {
		post: articles.index
	};
}
