<script lang="ts">
	import VerseCard from '$lib/components/VerseCard.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

{#if !data.verses.length}
	<section>
		<h1>No verses found</h1>
		<p>There's nothing to see here at the moment,</p>
		<p>stay tuned for updates coming soon!</p>
	</section>
{:else}
	<main>
		<h2>Verses</h2>
		{#each data.verses as verse}
			<VerseCard {verse} />
		{/each}
	</main>
{/if}

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
		margin: auto;
		max-width: 80ch;
	}

	h1 {
		font-weight: 500;
		margin-bottom: 0.3em;
	}

	h2 {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		width: fit-content;
		position: relative;
	}

	h2::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: var(--blue-chalk);
	}

	p {
		color: var(--oslo-gray);
	}
</style>
