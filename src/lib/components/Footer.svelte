<script lang="ts">
	import { Github, Linkedin, Discord } from 'svelte-bootstrap-icons';
	import Link from '$lib/components/Link.svelte';
</script>

<footer>
	<hr />
	<p>SEE SOMETHING TO IMPROVE?</p>
	<p>OPEN AN ISSUE ↗</p>

	<p>
		&copy; 2022&ndash;{new Date().getFullYear()} VICTORIA TRINITA PARDEDE
	</p>
</footer>

<style>
	p {
		font-family: 'Departure Mono', monospace;
		font-size: 0.75rem;
		text-align: center;
	}
	/* footer {
		display: grid;
		gap: 0.5em;
		font-size: clamp(0.875em, 2vw, 1em);
		padding: 3em 1em;
		margin: auto auto 2.5em;

	} */

	footer hr {
		border: none;
		border-top: 1px solid #999; /* line color */
		margin: 2rem 0; /* space above/below */
	}
</style>
