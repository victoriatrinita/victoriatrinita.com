<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container">
	<h1 class="page-title">Cooklogs</h1>

	<div class="cooklog-grid">
		{#each data.cooklogs as post}
			<a href="/cooklogs/{post.slug}" class="log-card">
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
</div>

<style>
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.page-title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 2rem;
	}

	/* Grid Layout */
	.cooklog-grid {
		display: grid;
		gap: 2rem;
		/* Responsive columns: at least 300px wide, 1 column mobile, up to 3 on desktop */
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}

	/* Card Styling */
	.log-card {
		display: block;
		text-decoration: none;
		color: inherit;
		background: white;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #eee;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.log-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	/* The "Ideal Size" Image Logic */
	.image-container {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9; /* Change to 1/1 for square grid */
		background: #f0f0f0;
		overflow: hidden;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Crops image to fill container without distortion */
		transition: transform 0.5s ease;
	}

	.log-card:hover img {
		transform: scale(1.05);
	}

	/* Content Styling */
	.card-content {
		padding: 1.25rem;
	}

	.card-meta {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		font-family: monospace;
		font-size: 0.8rem;
		color: #888;
	}

	.recipe-title {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.log-card:hover .recipe-title {
		color: #e67e22; /* Changes color on hover */
	}

	.no-image {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: #aaa;
	}
</style>
