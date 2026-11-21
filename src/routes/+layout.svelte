<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/app.css';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>{page.data.meta?.title || page.status}</title>
</svelte:head>

<Navigation />

<div>
	{@render children?.()}
</div>

<Footer />

<style>
	:global(body > #svelte) {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		min-height: 100dvh;
	}

	div {
		width: min(var(--page-width), calc(100% - 2em));
		margin-inline: auto;
	}
</style>
