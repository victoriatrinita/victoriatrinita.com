<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	export let data: PageData;
</script>

<main>
	<h1 class="page-title">Cooklogs</h1>

	<div class="cooklog-grid">
		{#each data.cooklogs as post (post.slug)}
			<a href={resolve(`/cooklogs/${post.slug}`)} class="log-card">
				<div class="image-container">
					{#if post.image}
						<img src={post.image} alt={post.title} loading="lazy" decoding="async" />
					{:else}
						<div class="no-image">No Image</div>
					{/if}
				</div>

				<div class="card-content">
					<div class="card-meta">
						<span class="recipe-id">#{post.id}</span>
						<time class="recipe-date">{post.date_cooked}</time>
					</div>
					<h2 class="recipe-title">{post.title}</h2>
				</div>
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		display: grid;
		gap: 1em;
		padding: clamp(2em, 3vw, 4em) 1em;
		max-width: var(--page-width);
	}

	.page-title {
		justify-self: center;
		margin: 1em 0 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	.cooklog-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
	}

	.log-card {
		display: block;
		text-decoration: none;
		color: inherit;
		background: var(--white);
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid var(--gallery);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.log-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	.image-container {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--soft-gray);
		overflow: hidden;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.log-card:hover img {
		transform: scale(1.05);
	}

	.card-content {
		padding: 1.25rem;
	}

	.card-meta {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		font-family: monospace;
		font-size: 0.8rem;
		color: var(--silver);
	}

	.recipe-title {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.log-card:hover .recipe-title {
		color: var(--burnt-orange);
	}

	.no-image {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--silver-chalice);
	}
</style>
