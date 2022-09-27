<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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
