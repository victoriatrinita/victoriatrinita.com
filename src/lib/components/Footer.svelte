<script lang="ts">
	import Link from './Link.svelte';
</script>

<footer>
	<div>
		<p>SEE SOMETHING TO IMPROVE?</p>
		<Link href="https://github.com/victoriatrinita/victoriatrinita.com/issues"
			>OPEN AN ISSUE ↗</Link
		>
	</div>

	<p>
		&copy; 2022&ndash;{new Date().getFullYear()} VICTORIA TRINITA PARDEDE
	</p>
</footer>

<style>
	footer {
		font-family: 'Departure Mono', monospace;
		font-size: 0.75rem;
		text-align: center;
		display: grid;
		gap: 1rem;

		padding: 1.5rem 0;
		border-top: 1px solid #999;
	}
</style>
