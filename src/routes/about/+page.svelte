<script>
	export let data;
	import TapedPolaroid from '$lib/TapedPolaroid.svelte';
	import Article from '../../pages/Article.svelte';
</script>

<svelte:head>
	<title>About | Victoria T P</title>
</svelte:head>

<Article>
	<TapedPolaroid src="about/ori.jpg" alt="Self portrait" />

	<section>
		{@html data.post.content}
	</section>
</Article>
