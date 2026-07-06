<script lang="ts">
	interface Props {
		book: import('$lib/types').Book;
	}

	let { book }: Props = $props();
</script>

<a href="books/{book.slug}">
	<section>
		<h3>{book.title}</h3>
		{#if book.subtitle}
			<p class="subtitle">{book.subtitle}</p>
		{/if}
		<small class="author">by {book.author}</small>
		{#if book.category}
			<small class="category">{book.category}</small>
		{/if}
		<footer>
			<small class="status">{book.status}</small>
			{#if book.date.started}
				<small>Started: {book.date.started}</small>
			{/if}
			{#if book.date.finished}
				<small>Finished: {book.date.finished}</small>
			{/if}
		</footer>
	</section>
</a>

<style>
	small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	}

	section {
		background-color: var(--wild-sand);
		border-radius: 20px;
		padding: 1em 1.5em;
		cursor: pointer;
		color: var(--martinique);
		transition: all 300ms ease-out;
		border: solid var(--alto) 1px;
		display: grid;
		gap: 0.25em;
	}

	section:hover {
		box-shadow: 0px 3.4359px 18px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.2em);
		background-color: var(--white-lilac);
		border: solid var(--lavender-gray) 1px;
	}

	h3 {
		font-weight: 600;
		font-size: clamp(1.125rem, 2vw, 1.25rem);
		margin: 0;
	}

	.subtitle {
		margin: 0;
		color: var(--grey);
		font-size: clamp(0.75rem, 1.7vw, 0.875rem);
		line-height: 1.4;
	}

	.category {
		color: var(--grey);
		font-weight: 600;
		text-transform: lowercase;
	}

	.category::before {
		content: '#';
		margin-right: 0.15em;
	}

	.author {
		color: var(--grey);
		font-style: italic;
	}

	.status {
		font-weight: 600;
		padding: 0.25em 0.75em;
		border-radius: 12px;
		width: fit-content;
		background-color: #fef3c7;
		color: #92400e;
		border: 1px solid #fcd34d;
	}

	footer {
		display: flex;
		gap: 1em;
		align-items: center;
		margin-top: 0.5em;
	}

	a {
		text-decoration: none;
	}
</style>
