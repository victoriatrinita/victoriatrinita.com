<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		post: import('$lib/types').Post;
	}

	let { post }: Props = $props();
</script>

<article>
	<time datetime={post.date.published}>{post.date.published}</time>
	<div>
		<h2><a href={resolve(`/posts/${post.slug}`)}>{post.title}</a></h2>
		{#if post.description}<p>{post.description}</p>{/if}
		{#if post.tags.length}
			<ul aria-label="Tags">
				{#each post.tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>

<style>
	article {
		position: relative;
		display: grid;
		align-items: baseline;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 0.35rem clamp(1rem, 4vw, 2rem);
		padding-block: 1.25rem;
	}

	time,
	ul {
		font: 0.8125rem/1.5 var(--font-mono);
		color: var(--dusty-gray);
	}

	h2 {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.3;
		font-weight: 600;
	}

	a::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	a:hover,
	a:focus-visible {
		color: var(--moody-blue);
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	p,
	ul {
		margin-top: 0.4rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.75rem;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 36rem) {
		article {
			grid-template-columns: 1fr;
		}
	}
</style>
