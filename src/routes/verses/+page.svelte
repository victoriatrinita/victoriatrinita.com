<script lang="ts">
	import VerseCard from '$lib/components/VerseCard.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<main>
	<h1>Verses</h1>
	{#if !data.verses.length}
		<div class="empty">
			<p>There's nothing to see here at the moment,</p>
			<p>stay tuned for updates coming soon!</p>
		</div>
	{:else}
		<div class="verse-list">
			{#each data.verses as verse}
				<VerseCard {verse} />
			{/each}
		</div>
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 1em;
		min-height: 100%;
		max-width: 68ch;
		margin-inline: auto;
		padding: clamp(2em, 3vw, 4em) 1em;
		line-height: 1.5;
		overflow-wrap: anywhere;
	}

	h1 {
		margin: 1em 0 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	.verse-list {
		display: grid;
		align-content: start;
		gap: clamp(1rem, 3vw, 2rem);
	}

	.empty {
		place-self: center;
		text-align: center;
	}
</style>
