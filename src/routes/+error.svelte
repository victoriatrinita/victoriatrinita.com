<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="wrapper">
	{#if $page.status == 404}
		<h1>404</h1>
		<h1>Oops! Looks like you're lost!</h1>
		<h2>Let's head back <a href="/">home</a>.</h2>
	{:else}
		<h1>{$page.status}</h1>
		<h2>{$page.error?.message}</h2>
	{/if}
</div>

<style>
	.wrapper {
		display: grid;
		margin: auto auto 0 auto;
		max-width: 97ch;
		text-align: center;
	}
	h1:first-of-type {
		font-size: clamp(5rem, 8vw, 7rem);
		font-weight: 500;
	}
	h1:nth-of-type(2) {
		font-size: clamp(1.5rem, 3vw, 2rem);
	}
	h2 {
		margin-top: 1.75em;
		font-size: clamp(1rem, 2vw, 1.5rem);
	}
	a {
		text-decoration: underline;
	}
</style>
