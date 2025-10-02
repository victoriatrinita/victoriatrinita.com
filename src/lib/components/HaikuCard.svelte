<script lang="ts">
	interface Props {
		haiku: import('$lib/types').Haiku;
	}

	let { haiku }: Props = $props();
</script>

<li>
	<time>{haiku.date}</time>
	<div>
		{#each haiku.en as line}
			<p>{line}</p>
		{/each}
	</div>
	<div>
		<p>[JAPANESE TRANSLATION]</p>
		{#each haiku.ja as line}
			<p>{line}</p>
		{/each}
	</div>
</li>

<style>
	/* small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	} */

	li {
		padding: 1em 1em;
		display: grid;
		gap: 1rem;
		background-image: url('/assets/dotted.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		font-size: 0.8125rem;
	}
	div {
		display: grid;
		gap: 0.5rem;
	}

	div:nth-of-type(2) p:first-of-type {
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: oklch(0.6167 0 0);
	}
</style>
