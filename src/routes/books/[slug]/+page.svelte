<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<Article showProgress={true}>
	<header>
		<h1>{data.book.title}</h1>
		<p class="author">by {data.book.author}</p>
		<div class="metadata">
			<span class="status">{data.book.status}</span>
			{#if data.book['date:started']}
				<span>Started: {data.book['date:started']}</span>
			{/if}
			{#if data.book['date:finished']}
				<span>Finished: {data.book['date:finished']}</span>
			{/if}
		</div>
	</header>
	<section>
		{@html data.book.content}
	</section>
</Article>

<style>
	header {
		margin-bottom: 2em;
		border-bottom: 1px solid var(--alto);
		padding-bottom: 1em;
	}

	h1 {
		font-weight: 700;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		margin: 0 0 0.5em 0;
		color: var(--martinique);
	}

	.author {
		font-size: clamp(1.125rem, 2vw, 1.25rem);
		color: var(--grey);
		font-style: italic;
		margin: 0 0 1em 0;
	}

	.metadata {
		display: flex;
		gap: 1.5em;
		flex-wrap: wrap;
		align-items: center;
		font-size: clamp(0.875rem, 2vw, 1rem);
	}

	.status {
		font-weight: 600;
		padding: 0.35em 1em;
		border-radius: 15px;
		background-color: #fef3c7;
		color: #92400e;
		border: 1px solid #fcd34d;
		font-size: clamp(0.875rem, 2vw, 0.95rem);
	}

	.metadata span {
		color: var(--grey);
	}
</style>
