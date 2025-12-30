<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<Article showProgress={true}>
	<h1>{data.year}.{data.month}</h1>
	<section>
		{#each data.items as item}
			<h3>{item.date}</h3>
			{#each item.en as line}
				<p>{@html line}</p>
			{/each}
			{#each item.ja as line}
				<p>{@html line}</p>
			{/each}
			<br />
		{/each}
	</section>
</Article>

<style>
	h1 {
		font-weight: 700;
	}
</style>
