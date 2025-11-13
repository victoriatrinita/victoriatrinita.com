<script lang="ts">
	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<main>
	<h2>Haiku</h2>
	{#each data.dates as date}
		<li>
			<a href={`/haiku/${date.year}/${date.month}`}>
				{date.year}/{date.month}
			</a>
		</li>
	{/each}
</main>

<style>
	main {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		min-width: 50%;
		gap: 1em;
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em;
		margin: auto;
		max-width: 80ch;
	}

	h2 {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		width: fit-content;
		position: relative;
	}

	h2::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: var(--blue-chalk);
	}
</style>
