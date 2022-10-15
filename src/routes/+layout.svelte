<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/fonts.css';
	import '../app.css';
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
