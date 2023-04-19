<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Posts | Victoria T P</title>
</svelte:head>

<wrapper>
	<h2>Posts</h2>
	{#if Array.isArray(data.posts) && !data.posts.length}
		<p>no posts found</p>
	{/if}

	{#each data.posts as post}
		<PostCard {post} />
	{/each}
</wrapper>

<style>
	wrapper {
		word-wrap: break-word;
		line-height: 1.5;
		margin: auto;
		min-width: 84ch;
		gap: 1em;
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 97ch;
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
		background: #e8d8ff;
	}
</style>
