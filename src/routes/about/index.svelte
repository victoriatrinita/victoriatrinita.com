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
	import TapedPolaroid from '$lib/TapedPolaroid.svelte';
	import Article from '../../pages/Article.svelte';
</script>

<svelte:head>
	<title>About | Victoria T P</title>
</svelte:head>

<Article>
	<TapedPolaroid src="about/ori.jpg" alt="Self portrait" />

	<section>
		{@html post.content}
	</section>
</Article>
