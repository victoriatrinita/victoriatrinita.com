<script lang="ts">
	import type { PageData } from './$types';
	import CooklogCard from '$lib/components/CooklogCard.svelte';
	export let data: PageData;
</script>

<main>
	<h1 class="page-title">Cooklogs</h1>

	<ul class="cooklog-grid">
		{#each data.cooklogs as cooklog (cooklog.slug)}
			<CooklogCard {cooklog} heading="h2" />
		{/each}
	</ul>
</main>

<style>
	main {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		display: grid;
		gap: 1em;
		padding: clamp(2em, 3vw, 4em) 1em;
		max-width: var(--page-width);
	}

	.page-title {
		justify-self: center;
		margin: 1em 0 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	.cooklog-grid {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
	}
</style>
