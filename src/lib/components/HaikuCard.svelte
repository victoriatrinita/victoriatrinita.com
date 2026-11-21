<script lang="ts">
	interface Props {
		haiku: import('$lib/types').Haiku;
	}

	let { haiku }: Props = $props();

	const [year, month] = $derived(haiku.date.split('-'));
</script>

<li id={haiku.date}>
	<a href={`/haiku/${year}/${month}#${haiku.date}`}>
		<time datetime={haiku.date}>{haiku.date}</time>
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
	</a>
</li>

<style>
	a {
		height: 100%;
		padding: 1em;
		display: grid;
		gap: 1rem;
		background:
			linear-gradient(var(--paper-tint), var(--paper-tint)),
			url('/assets/dotted.svg') center / cover no-repeat var(--surface);
		font-size: 0.8125rem;
	}

	a:hover,
	a:focus-visible {
		box-shadow: 0 5px 12px color-mix(in srgb, var(--silver) 23%, transparent);
	}

	@media (prefers-reduced-motion: no-preference) {
		a {
			transition:
				transform 160ms ease-out,
				box-shadow 160ms ease-out;
		}

		a:hover,
		a:focus-visible {
			transform: translateY(-3px);
		}
	}

	time {
		justify-self: start;
		font: 0.8125rem/1.5 var(--font-mono);
		color: var(--dusty-gray);
	}

	a:focus-visible {
		outline: 2px solid var(--dusty-gray);
		outline-offset: 2px;
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
