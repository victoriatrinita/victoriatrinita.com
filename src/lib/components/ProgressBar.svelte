<script lang="ts">
	import { mounted } from '$lib/store';

	interface Props {
		z?: number;
		height?: string;
		class?: string;
	}

	let { z = 3, height = '0.25rem', class: className = '' }: Props = $props();
	let scrollY = $state($mounted ? document.body.scrollTop : 0);
	let innerHeight = $state($mounted ? document.body.scrollHeight : 1);

	let scrolled = $derived($mounted ? document.body.scrollHeight : scrollY);
	let progress = $derived((scrollY / (scrolled - innerHeight)) * 100);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div
	class={className}
	style:height
	style:z-index={z}
	style:transform="translateX({progress}%)"
></div>

<style>
	div {
		width: 100%;
		position: fixed;
		top: 0;
		left: -100%;
		background-color: var(--chetwode-blue);
	}
</style>
