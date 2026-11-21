<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<main>
	<h1>Haiku</h1>
	<p>
		This is my daily reflection written in haiku form. I prioritise the message I want to say, with
		the 5-7-5 structure only as a baseline that I don't force when the meaning is clearer without
		it. The Japanese translation also aims to convey the original English meaning and nuance in the
		closest way possible, not to strictly follow 5-7-5.
	</p>

	<ul>
		{#each data.dates as date (`${date.year}-${date.month}`)}
			<li>
				<a href={resolve(`/haiku/${date.year}/${date.month}`)}>
					{date.year}/{date.month}
				</a>
			</li>
		{/each}
	</ul>
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

	h1 {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	ul {
		margin: 0;
		padding-left: 1.25rem;
	}
</style>
