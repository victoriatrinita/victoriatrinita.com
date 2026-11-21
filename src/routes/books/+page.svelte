<script lang="ts">
	import BookCard from '$lib/components/BookCard.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<main>
	<h1>Books</h1>
	{#if !data.books.length}
		<section>
			<p>There's nothing to see here at the moment,</p>
			<p>stay tuned for updates coming soon!</p>
		</section>
	{:else}
		<div class="books-list">
			{#each data.books as book}
				<BookCard {book} />
			{/each}
		</div>
	{/if}
</main>

<style>
	section {
		place-self: center;
		text-align: center;
	}

	main {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		min-width: 50%;
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 100%;
		gap: 1em;
		padding: clamp(2em, 3vw, 4em) 1em;
		max-width: var(--page-width);
		width: 100%;
	}

	.books-list {
		align-self: start;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 24ch), 1fr));
		gap: clamp(1rem, 2vw, 1.5rem);
		container-type: inline-size;
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

	@container (max-width: 32ch) {
		.books-list {
			grid-template-columns: 1fr;
		}
	}
</style>
