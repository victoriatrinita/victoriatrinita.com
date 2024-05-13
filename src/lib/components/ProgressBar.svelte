<script>
	import { mounted } from '$lib/store';

	export let z = 3;
	export let height = '0.25rem';
	export { className as class };

	let className = '';
	let scrollY = $mounted ? document.body.scrollTop : 0;
	let innerHeight = $mounted ? document.body.scrollHeight : 1;

	$: scrolled = $mounted ? document.body.scrollHeight : scrollY;
	$: progress = (scrollY / (scrolled - innerHeight)) * 100;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class={className} style:height style:z-index={z} style:transform="translateX({progress}%)" />

<style>
	div {
		width: 100%;
		position: fixed;
		top: 0;
		left: -100%;
		background-color: var(--chetwode-blue);
	}
</style>
