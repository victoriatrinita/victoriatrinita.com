<script lang="ts">
	import TapedPolaroid from '$lib/components/TapedPolaroid.svelte';
	import Article from '$lib/pages/Article.svelte';

	export let data: import('./$types').PageData;
</script>

<svelte:head>
	<title>About | Victoria T P</title>
</svelte:head>

<Article>
	<TapedPolaroid src="assets/profile/ori.jpg" alt="Self portrait" />

	<section>
		{@html data.post.content}
	</section>
</Article>
