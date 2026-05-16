<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { post } = data;
</script>

<div class="recipe-container">
	<header class="recipe-header">
		<a href="/cooklogs" class="back-link">← Back to Logs</a>
		<h1 class="title">{post.title}</h1>

		{#if post.tags}
			<div class="tag-list">
				{#each post.tags as tag}
					<span class="tag">#{tag}</span>
				{/each}
			</div>
		{/if}
	</header>

	<main class="recipe-body">
		{#if post.image}
			<div class="main-visual">
				<img src={post.image} alt={post.title} />
			</div>
		{/if}

		<section class="description">
			{@html post.content}
		</section>

		<section class="log-history">
			<h2 class="history-title">Cooking History</h2>

			{#each post.cook_logs as log}
				<article class="log-card">
					<div class="log-meta">
						<time>{log.date}</time>
						<span class="stars">
							{'★'.repeat(log.rating)}{'☆'.repeat(5 - log.rating)}
						</span>
					</div>

					<p class="log-notes">{log.notes}</p>

					{#if log.images && log.images.length > 0}
						<div class="log-grid" style="--img-count: {log.images.length}">
							{#each log.images as img}
								<div class="grid-item">
									<img src={img} alt="Cook detail" loading="lazy" />
								</div>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</section>
	</main>
</div>

<style>
	.recipe-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family:
			system-ui,
			-apple-system,
			sans-serif;
		color: #333;
	}

	.back-link {
		display: inline-block;
		text-decoration: none;
		color: #888;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.recipe-header {
		margin-bottom: 2rem;
	}

	.title {
		font-size: 2.5rem;
		margin: 0 0 0.75rem 0;
		line-height: 1.2;
	}

	.tag-list {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		color: #e67e22;
		font-size: 0.9rem;
		font-weight: 500;
	}

	/* Main Visual Card */
	.main-visual {
		margin-bottom: 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.main-visual img {
		width: 100%;
		display: block;
		max-height: 500px;
		object-fit: cover;
	}

	.description {
		font-size: 1.15rem;
		line-height: 1.7;
		margin-bottom: 4rem;
	}

	/* History Section */
	.history-title {
		font-size: 1.5rem;
		border-bottom: 2px solid #eee;
		padding-bottom: 0.5rem;
		margin-bottom: 2rem;
	}

	.log-card {
		background: #fdfdfd;
		border: 1px solid #eee;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 2rem;
	}

	.log-meta {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		font-weight: 600;
		color: #666;
	}

	.stars {
		color: #f1c40f;
	}

	.log-notes {
		white-space: pre-wrap;
		margin-bottom: 1.5rem;
		color: #444;
	}

	/* Multi-Image Grid Logic */
	.log-grid {
		display: grid;
		gap: 0.75rem;
		/* If 1 image: full width. If more: 2 columns. */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
	}

	.grid-item img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 6px;
		display: block;
	}

	@media (max-width: 600px) {
		.title {
			font-size: 1.8rem;
		}
	}
</style>
