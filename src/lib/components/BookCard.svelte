<script lang="ts">
	interface Props {
		book: import('$lib/types').Book;
	}

	let { book }: Props = $props();
</script>

<a href="/books/{book.slug}">
	<div class="cover">
		{#if book.category}<small>{book.category}</small>{/if}
		<h3>{book.title}</h3>
		{#if book.subtitle}<p class="subtitle">{book.subtitle}</p>{/if}
		<p class="author">by {book.author}</p>
	</div>
	<footer>
		<strong>{book.status}</strong>
		{#if book.date.started}<span>Started: {book.date.started}</span>{/if}
		{#if book.date.finished}<span>Finished: {book.date.finished}</span>{/if}
	</footer>
</a>

<style>
	a {
		--cloth: #334d45;
		display: grid;
		grid-template-rows: 1fr auto;
		border-radius: 3px 8px 8px 3px;
		background: var(--book-paper);
		box-shadow: 0 2px 5px #30271b24, inset 0 0 0 1px var(--book-paper-edge);
		overflow-wrap: anywhere;
	}
	a:nth-child(3n + 2) {
		--cloth: #67444f;
	}
	a:nth-child(3n) {
		--cloth: #384c65;
	}
	.cover {
		padding: clamp(1.25rem, 3vw, 1.75rem);
		border-radius: 3px 8px 0 0;
		background: linear-gradient(90deg, #0002, transparent 5px, #fff2 8px, transparent 11px), var(--cloth);
		color: #fff8e9;
	}
	small,
	footer {
		font: 0.75rem/1.5 var(--font-mono);
	}
	h3 {
		margin: 0.75rem 0 0.5rem;
		color: inherit;
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		line-height: 1.15;
		text-wrap: balance;
	}
	.subtitle,
	.author {
		color: inherit;
		font-size: 0.9375rem;
	}
	.author {
		margin-top: 1rem;
		font-style: italic;
	}
	footer {
		display: grid;
		gap: 0.15rem;
		padding: 0.75rem 1.25rem;
		color: var(--book-paper-text);
	}
	a:hover h3,
	a:focus-visible h3 {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.15em;
	}
</style>
