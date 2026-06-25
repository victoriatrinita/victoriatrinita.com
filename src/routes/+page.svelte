<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import PostList from '$lib/components/PostList.svelte';
	import HaikuCard from '$lib/components/HaikuCard.svelte';
	import CooklogCard from '$lib/components/CooklogCard.svelte';
	import VerseOfTheDay from '$lib/components/VerseOfTheDay.svelte';

	let innerWidth = $state(0);

	let { data } = $props();
</script>

<svelte:window bind:innerWidth />

<main class="wrapper">
	<section>
		<div>
			<h1>Victoria Trinita Pardede</h1>
			<p>Building, writing, growing.</p>
		</div>
	</section>

	<section>
		<h2>POSTS</h2>

		{#each data.recentPosts.slice(0, 3) as post}
			<PostList {post} />
		{/each}

		{@render link('posts')}
	</section>

	<section>
		<h2>HAIKUS</h2>
		<ul>
			{#each data.recentHaikus as haiku}
				<HaikuCard {haiku} />
			{/each}
		</ul>
		{@render link('haiku')}
	</section>

	<section>
		<h2>COOKLOGS</h2>
		<ul>
			{#each data.recentCooklogs as cooklog}
				<CooklogCard {cooklog} />
			{/each}
		</ul>
		{@render link('cooklogs')}
	</section>

	<VerseOfTheDay />
</main>

{#snippet link(path: string)}
	<a href="/{path}" aria-label="/{path}">→ SEE MORE</a>
{/snippet}

<style>
	a {
		font-family: var(--font-mono);
		font-size: 0.875rem;
	}

	h2 {
		display: flex;
		align-items: center;
		font-weight: normal;
	}

	h2::after {
		content: '';
		flex: 1;
		border-bottom: 1px dashed #000;
		margin-left: 1rem;
	}

	section:nth-of-type(3) ul,
	section:nth-of-type(4) ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		align-items: stretch;
	}

	@media (max-width: 600px) {
		section:nth-of-type(2) div {
			grid-template-columns: 1fr;
		}
	}

	.wrapper {
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em;
		margin: auto;
		max-width: 80ch;
	}

	section {
		display: grid;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	h2 {
		/* font-weight: bolder; */
		font-size: clamp(1rem, 3vw, 1.125rem);
		/* width: fit-content;
		position: relative;
		margin-bottom: 0.5em; */
		font-family: 'Departure Mono', monospace;
		/* margin-bottom: 0.75rem; */
	}

	p {
		font-size: clamp(0.875rem, 3vw, 1rem);
		line-height: 1.8rem;
		font-family: 'New York', monospace;
		color: oklch(0.373 0.034 259.733);
	}
</style>
