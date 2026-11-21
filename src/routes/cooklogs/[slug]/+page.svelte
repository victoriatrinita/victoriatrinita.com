<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	export let data: PageData;
	$: post = data.post;
</script>

<div class="recipe-container">
	<header class="recipe-header">
		<a href={resolve('/cooklogs')} class="back-link">← Cooklogs</a>
		<h1>{post.title}</h1>

		{#if post.tags}
			<div class="tag-list">
				{#each post.tags as tag (tag)}
					<span class="tag">#{tag}</span>
				{/each}
			</div>
		{/if}
	</header>

	<main class="recipe-body">
		<div class="main-visual">
			{#if post.image}
				<img src={post.image} alt={post.title} />
			{:else}
				<p class="placeholder">No photo yet</p>
			{/if}
		</div>

		<section class="description">
			{@html post.content}
		</section>

		{#if post.cook_logs?.length}
			<section class="log-history">
				<h2 class="history-title">Cooking History</h2>

				{#each post.cook_logs as log (log)}
					<article class="entry">
						<div class="log-meta">
							<time>{log.date}</time>
							<span class="stars">
								{'★'.repeat(log.rating)}{'☆'.repeat(5 - log.rating)}
							</span>
						</div>

						<p class="log-notes">{log.notes}</p>

						{#each log.images as img}
							{#if img !== post.image && img.replace(',w_800/', ',w_1200/').replace(/\.jpg$/, '') !== post.image}
								<img class="entry-photo" src={img} alt="Cook detail" loading="lazy" />
							{/if}
						{/each}
					</article>
				{/each}
			</section>
		{/if}
	</main>
</div>

<style>
	.recipe-container {
		max-width: var(--page-width);
		margin: 0 auto;
		padding: clamp(2em, 3vw, 4em) 1em;
		line-height: 1.5;
		color: var(--mine-shaft);
	}

	.back-link {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 0.15em;
		font-size: 0.875rem;
	}

	.recipe-header {
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		margin: 1em 0 0.5em;
		text-align: center;
	}

	.tag-list {
		display: flex;
		gap: 0.25rem 0.75rem;
		flex-wrap: wrap;
		justify-content: center;
		color: var(--dusty-gray);
		font-size: 0.875rem;
	}

	.main-visual {
		position: relative;
		display: grid;
		place-items: center;
		width: min(100%, 20rem);
		aspect-ratio: 3 / 2;
		margin-inline: auto;
		overflow: hidden;
		border: 1px solid var(--alto);
		border-radius: 0.5rem;
		background: var(--soft-gray);
	}

	.main-visual img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder {
		color: var(--dusty-gray);
		font: 0.8125rem/1.5 var(--font-mono);
	}

	.description,
	.log-history {
		margin-top: 2rem;
	}

	.history-title {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.entry {
		margin-top: 1.25rem;
	}

	.entry + .entry {
		border-top: 1px solid var(--alto);
		padding-top: 1.25rem;
	}

	.log-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		font: 0.8125rem/1.5 var(--font-mono);
		color: var(--dusty-gray);
	}

	.stars {
		color: var(--moody-blue);
	}

	.log-notes {
		white-space: pre-wrap;
		margin-top: 0.5rem;
	}

	.entry-photo {
		width: min(100%, 10rem);
		aspect-ratio: 4 / 3;
		object-fit: cover;
		margin-top: 0.75rem;
		border-radius: 6px;
	}
</style>
