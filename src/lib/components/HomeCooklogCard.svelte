<script lang="ts">
	import { resolve } from '$app/paths';
	interface Props {
		cooklog: import('$lib/types').Cooklog;
	}

	let { cooklog }: Props = $props();
	let failedImage = $state<string>();
</script>

<li>
	<a href={resolve('/cooklogs')}>
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
		</div>
		<div class="caption">
			<p>[{cooklog.id}]</p>
			<small>{cooklog.title}</small>
		</div>
	</a>
</li>

<style>
	a {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		overflow: hidden;
		border-radius: 3px;
		background: url('/assets/grid.svg') center / cover no-repeat;
		transition:
			transform 300ms ease-out,
			box-shadow 300ms ease-out;
	}

	.photo {
		width: 100%;
		aspect-ratio: 16 / 9;
		position: relative;
		display: grid;
		place-items: center;
		background: var(--soft-gray);
	}

	.placeholder {
		color: var(--dusty-gray);
		padding: 0.25rem;
		font-size: 0.75rem;
		text-align: center;
	}

	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.caption {
		display: grid;
		align-content: center;
		gap: 0.25em;
		padding: 1em 1.5em;
		overflow-wrap: anywhere;
	}

	.caption p {
		font-family: var(--font-mono);
		color: var(--oslo-gray);
		font-size: clamp(0.5rem, 2vw, 0.75rem);
	}

	small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	}

	a:hover,
	a:focus-visible {
		box-shadow: 0 3px 18px rgb(0 0 0 / 20%);
		transform: translateY(-0.2em);
		background-color: var(--white-lilac);
		outline: 1px solid var(--lavender-gray);
	}
</style>
