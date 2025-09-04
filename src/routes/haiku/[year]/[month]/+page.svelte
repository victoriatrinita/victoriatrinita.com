<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<h1>{data.year}.{data.month}</h1>

<Article showProgress={true}>
	<section>
		{#each data.items as item}
			<h3>{item.date}</h3>
			{@html item.content}
			<br />
		{/each}
	</section>
</Article>

<style>
	h1 {
		font-weight: 700;
	}
</style>
