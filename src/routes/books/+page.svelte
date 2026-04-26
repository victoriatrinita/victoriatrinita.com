<script lang="ts">
	import BookCard from '$lib/components/BookCard.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

{#if !data.books.length}
	<section>
		<h1>No books found</h1>
		<p>There's nothing to see here at the moment,</p>
		<p>stay tuned for updates coming soon!</p>
	</section>
{:else}
	<main>
		<h2>Books</h2>
		{#each data.books as book}
			<BookCard {book} />
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
</style>
