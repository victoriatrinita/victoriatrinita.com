<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import PostList from '$lib/components/PostList.svelte';
	// import HaikuCard from '$lib/components/HaikuCard.svelte';
	// import CooklogCard from '$lib/components/CooklogCard.svelte';
	import VerseOfTheDay from '$lib/components/VerseOfTheDay.svelte';

	let innerWidth = $state(0);

	let { data } = $props();
</script>

<svelte:window bind:innerWidth />

<main class="wrapper">
	<section>
		<h1>Victoria Trinita Pardede</h1>
		<p>Engineer by trade, writer by day.</p>
	</section>

	<section>
		<h2>POSTS</h2>

		{#each data.recentPosts.slice(0, 3) as post}
			<PostList {post} />
		{/each}

		<Link href="/posts">→ SEE MORE</Link>
	</section>

	<section>
		<h2>HAIKUS</h2>
		<!-- <HaikuCard {data.haiku}/> -->

		<Link href="/">→ SEE MORE</Link>
	</section>

	<section>
		<h2>COOKLOGS</h2>
		<!-- <CooklogCard {data.cooklog}/> -->
		<Link href="/">→ SEE MORE</Link>
	</section>

	<VerseOfTheDay />
</main>

<style>
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

	/* section:nth-of-type(2) div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	} */

	.wrapper {
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 80ch;
	}

	section {
		padding-bottom: 1.5em;
	}

	h2 {
		/* font-weight: bolder; */
		font-size: clamp(1rem, 3vw, 1.125rem);
		/* width: fit-content;
		position: relative;
		margin-bottom: 0.5em; */
		font-family: 'Departure Mono', monospace;
	}

	p {
		font-size: clamp(0.875rem, 3vw, 1rem);
		line-height: 1.8rem;
		font-family: 'New York', monospace;
		color: oklch(0.373 0.034 259.733);
	}
</style>
