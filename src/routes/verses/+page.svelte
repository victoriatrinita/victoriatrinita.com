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
		<section>
			<p>There's nothing to see here at the moment,</p>
			<p>stay tuned for updates coming soon!</p>
		</section>
	{:else}
		{#each data.verses as verse}
			<VerseCard {verse} />
		{/each}
	{/if}
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto auto 2.5em;
	}

	main {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		min-width: 50%;
		gap: 1em;
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em;
		max-width: 80ch;
	}

	h1 {
		justify-self: center;
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		width: fit-content;
		position: relative;
		text-align: center;
	}

	p {
		color: var(--oslo-gray);
	}
</style>
