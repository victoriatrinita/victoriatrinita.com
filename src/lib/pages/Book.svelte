<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	interface Props {
		book: import('$lib/types').Book;
	}

	let { book }: Props = $props();
</script>

<svelte:head>
	<style>
		.book-notes h2,
		.book-notes h3 {
			margin: 1em 0 0.5em;
			font-weight: 700;
		}

		.book-notes h2 {
			font-size: clamp(1.3125rem, 3vw, 1.625rem);
		}

		.book-notes h3 {
			font-size: clamp(1.2rem, 2.5vw, 1.5rem);
		}

		.book-notes p,
		.book-notes li {
			line-height: 1.8;
		}

		.book-notes p + p {
			margin-top: 0.75em;
		}
	</style>
</svelte:head>

<ProgressBar />
<main>
	<header>
		<h1>{book.title}</h1>
		{#if book.subtitle}
			<p class="subtitle">{book.subtitle}</p>
		{/if}
		<p class="author">by {book.author}</p>
		<div class="metadata">
			<span class="status">{book.status}</span>
			{#if book.date?.started}
				<span>Started: {book.date?.started}</span>
			{/if}
			{#if book.date?.finished}
				<span>Finished: {book.date?.finished}</span>
			{/if}
		</div>
	</header>
	<section class="book-notes">
		{@html book.content ?? ''}
	</section>
</main>

<style>
	main {
		max-width: var(--page-width);
		margin-inline: auto;
		padding: clamp(2em, 3vw, 4em) 1em;
		line-height: 1.5;
		overflow-wrap: anywhere;
	}

	header {
		margin-bottom: 2em;
		border-bottom: 1px solid var(--alto);
		padding-bottom: 1em;
	}

	h1 {
		font-weight: 700;
		font-size: clamp(1.5rem, 4vw, 2rem);
		margin: 1em 0 0.5em;
		text-align: center;
	}

	.subtitle {
		font-size: 1rem;
		margin: 0 0 0.5em 0;
		line-height: 1.5;
	}

	.author {
		font-size: 1rem;
		font-style: italic;
		margin: 0 0 1em 0;
	}

	.metadata {
		display: flex;
		gap: 1.5em;
		flex-wrap: wrap;
		align-items: center;
		font-size: 0.875rem;
	}

	.status {
		font-weight: 600;
		padding: 0.35em 1em;
		border-radius: 15px;
		background-color: #fef3c7;
		color: #92400e;
		border: 1px solid #fcd34d;
	}
</style>
