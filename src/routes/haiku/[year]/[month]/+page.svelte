<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Article from '$lib/pages/Article.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();

	function scrollToHaiku() {
		const id = window.location.hash.slice(1);
		if (!id) return;

		requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

	afterNavigate(scrollToHaiku);
</script>

<Article showProgress={true}>
	<h1>{data.year}.{data.month}</h1>
	{#if data.items.length}
		<div class="month-layout">
			<nav aria-label="Jump to a haiku by day">
				{#each data.items as item}
					<a href={'#' + item.slug} aria-label={item.date}>{item.slug.slice(-2)}</a>
				{/each}
			</nav>
			<div class="poems">
				{#each data.items as item (item.slug)}
					<section class="haiku" id={item.slug}>
						<h2><time datetime={item.slug}>{item.date}</time></h2>
						{#each [item.en, item.ja] as lines, index}
							{#if lines?.some((line: string) => line.trim())}
								<div class="stanza" lang={index === 0 ? 'en' : 'ja'}>
									{#each lines as line}
										<p>{@html line}</p>
									{/each}
								</div>
							{/if}
						{/each}
					</section>
				{/each}
			</div>
		</div>
	{/if}
</Article>

<style>
	h1 {
		margin: 1em 0 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	.month-layout {
		display: grid;
		grid-template-columns: auto minmax(0, 52ch);
		justify-content: center;
		gap: clamp(0.75rem, 3vw, 2rem);
		margin-top: 1rem;
	}

	nav {
		position: sticky;
		top: 1rem;
		align-self: start;
		display: grid;
		grid-template-columns: repeat(2, 2.25rem);
		max-height: calc(100dvh - 5rem);
		overflow-y: auto;
	}

	@media (max-width: 36rem) {
		nav {
			grid-template-columns: 2.25rem;
		}
	}

	nav a {
		text-align: center;
		padding-block: 0.4rem;
		color: var(--moody-blue);
		font: 0.8125rem/1.5 var(--font-mono);
	}

	nav a:hover,
	nav a:focus-visible {
		background: var(--soft-gray);
		text-decoration: underline;
	}

	.poems > .haiku:first-child {
		margin-top: 0;
	}

	.haiku {
		scroll-margin-top: 2rem;
		padding-top: 1.25rem;
	}

	.haiku h2 {
		margin: 0;
		font: 0.875rem/1.5 var(--font-mono);
		color: var(--dusty-gray);
	}

	.stanza {
		margin-top: 0.875rem;
	}

	.stanza p {
		margin: 0;
		line-height: 1.65;
	}
</style>
