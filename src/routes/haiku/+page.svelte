<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
	const monthLabel = new Intl.DateTimeFormat('en', { month: 'long', timeZone: 'UTC' });
	let archive = $derived.by(() => {
		const years = new Map<string, string[]>();
		for (const { year, month } of data.dates) {
			if (!years.has(year)) years.set(year, []);
			years.get(year)?.push(month);
		}
		return years;
	});
</script>

<main>
	<h1>Haiku</h1>
	<p>
		This is my daily reflection written in haiku form. I prioritise the message I want to say, with
		the 5-7-5 structure only as a baseline that I don't force when the meaning is clearer without
		it. The Japanese translation also aims to convey the original English meaning and nuance in the
		closest way possible, not to strictly follow 5-7-5.
	</p>

	{#each archive as [year, months] (year)}
		<section>
			<h2>{year}</h2>
			<ul>
				{#each months as month (month)}
					<li>
						<a href={resolve(`/haiku/${year}/${month}`)}>
							<time datetime={`${year}-${month}`}>
								{monthLabel.format(new Date(Date.UTC(Number(year), Number(month) - 1)))}
							</time>
						</a>
					</li>
				{/each}
			</ul>
		</section>
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

	h1 {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	section {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: baseline;
		gap: clamp(1rem, 4vw, 2.5rem);
		padding-top: 1rem;
	}

	h2 {
		font: 1rem/1.5 var(--font-mono);
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 7rem), 1fr));
		list-style: none;
		padding: 0;
		margin: 0;
	}

	a {
		display: block;
		padding-block: 0.5rem;
		text-decoration: underline;
		text-decoration-color: var(--alto);
		text-underline-offset: 0.2em;
	}

	a:hover,
	a:focus-visible {
		color: var(--moody-blue);
		text-decoration-color: currentColor;
	}
</style>
