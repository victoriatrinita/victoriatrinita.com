<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<main>
	<h1>Posts</h1>
	{#if !data.posts.length}
		<div class="empty">
			<p>There's nothing to see here at the moment,</p>
			<p>stay tuned for updates coming soon!</p>
		</div>
	{:else}
		<div class="posts">
			{#each data.posts as post}
				<PostCard {post} />
			{/each}
		</div>
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 1em;
		min-height: 100%;
		max-width: var(--page-width);
		margin-inline: auto;
		padding: clamp(2em, 3vw, 4em) 1em;
		line-height: 1.5;
		overflow-wrap: anywhere;
	}

	h1 {
		margin: 1em 0 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	.posts {
		align-self: start;
	}
	.empty {
		place-self: center;
		text-align: center;
	}
</style>
