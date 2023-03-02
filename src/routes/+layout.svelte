<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/fonts.css';
	import '$lib/styles/app.css';
</script>

<Navigation />

	<slot />

<Footer />

<style>
	:global(body > #svelte) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: 'Poppins', sans-serif;
	}
</style>
