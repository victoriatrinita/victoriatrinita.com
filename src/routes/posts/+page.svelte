<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';

	export let data: import('./$types').PageData;
</script>

<svelte:head>
	<title>Posts | Victoria T P</title>
</svelte:head>

{#if !data.posts.length}
	<section>
		<h1>No posts found</h1>
		<p>There's nothing to see here at the moment,</p>
		<p>stay tuned for updates coming soon!</p>
	</section>
{:else}
	<main>
		<h2>Posts</h2>
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</main>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto auto 2.5em;
	}

	main {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		min-width: 50%;
		gap: 1em;
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 97ch;
	}

	h1 {
		font-weight: 500;
		margin-bottom: 0.3em;
	}

	h2 {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 500;
		font-family: 'Poppins';
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

	p {
		color: var(--oslo-gray);
	}
</style>
