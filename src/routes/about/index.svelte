<script context="module">
	export async function load({ fetch }) {
		const articles = await fetch('/about.json').then((r) => r.json());
		return {
			props: {
				post: articles.index
			}
		};
	}
</script>

<script>
	export let post;
	import Article from '../../pages/Article.svelte';
</script>

<Article>
	<img src="about/ori.jpg" alt="Self Portrait" />

	<section>
		{@html post.content}
	</section>
</Article>

<style>
	img {
		height: clamp(215px, 25vw, 330px);
		padding-bottom: clamp(1em, 3vw, 2em);
	}
</style>
