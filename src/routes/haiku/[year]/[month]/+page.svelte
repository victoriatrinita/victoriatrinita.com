<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Article from '$lib/pages/Article.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();

	function getHaikuId(date: string) {
		const match = date.match(/(\d{4})\.(\d{2})\.(\d{2})/);

		return match ? `${match[1]}-${match[2]}-${match[3]}` : '';
	}

	function scrollToHaiku() {
		const id = window.location.hash.slice(1);
		if (!id) return;

		requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

	afterNavigate(scrollToHaiku);
</script>

<Article showProgress={true}>
	<h1>{data.year}.{data.month}</h1>
	<section>
		{#each data.items as item}
			<div id={getHaikuId(item.date)} class="haiku">
				<h3>{item.date}</h3>

				{#each item.en as line}
					<p>{@html line}</p>
				{/each}

				{#each item.ja as line}
					<p>{@html line}</p>
				{/each}
			</div>
		{/each}
	</section>
</Article>

<style>
	h1 {
		font-weight: 700;
	}
</style>
