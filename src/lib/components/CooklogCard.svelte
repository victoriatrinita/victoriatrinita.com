<script lang="ts">
	import { resolve } from '$app/paths';
	interface Props {
		heading?: 'h2' | 'h3';
		cooklog: import('$lib/types').Cooklog & { slug: string; rating?: number };
	}

	let { cooklog, heading = 'h3' }: Props = $props();
	let failedImage = $state<string>();
</script>

<li>
	<a href={resolve(`/cooklogs/${cooklog.slug}`)}>
		<div class="photo">
			{#if cooklog.image && cooklog.image !== failedImage}
				<img
					src={cooklog.image}
					alt=""
					loading="lazy"
					decoding="async"
					onerror={() => (failedImage = cooklog.image)}
				/>
			{:else}
				<p class="placeholder">No photo yet</p>
			{/if}
			<small>#{cooklog.id}</small>
		</div>
		<div class="caption">
			<svelte:element this={heading} class="title">{cooklog.title}</svelte:element>
			{#if cooklog.date_cooked}<time>{cooklog.date_cooked}</time>{/if}
			{#if cooklog.rating}
				<span aria-label={`${cooklog.rating} out of 5 stars`}>
					{'★'.repeat(cooklog.rating)}{'☆'.repeat(5 - cooklog.rating)}
				</span>
			{/if}
		</div>
	</a>
</li>

<style>
	a {
		display: block;
		height: 100%;
		overflow: hidden;
		background: var(--surface);
		border: 1px solid var(--alto);
		border-radius: 0.75rem;
	}

	.photo {
		position: relative;
		display: grid;
		place-items: center;
		aspect-ratio: 3 / 2;
		background: var(--soft-gray);
	}

	.placeholder {
		color: var(--dusty-gray);
		font-style: italic;
	}

	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	small {
		position: absolute;
		bottom: 0;
		left: 1rem;
		padding: 0.25rem 0.65rem;
		border-radius: 0.25rem 0.25rem 0 0;
		background: var(--moody-blue);
		color: var(--on-accent);
		font: 0.75rem/1.5 var(--font-mono);
	}

	.caption {
		padding: 1rem;
	}

	.title {
		color: var(--mine-shaft);
		font-size: clamp(1.05rem, 2vw, 1.3rem);
		line-height: 1.35;
		font-weight: 600;
		overflow-wrap: anywhere;
	}

	time,
	span {
		display: inline-block;
		margin-top: 0.5rem;
		color: var(--dusty-gray);
		font: 0.75rem/1.5 var(--font-mono);
	}

	a:hover,
	a:focus-visible {
		border-color: var(--moody-blue);
	}
</style>
