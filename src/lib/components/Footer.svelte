<script lang="ts">
	import { Github, Linkedin, Discord } from 'svelte-bootstrap-icons';
	import Link from '$lib/components/Link.svelte';
</script>

<footer>
	<section>
		<a
			data-sveltekit-preload-data
			href="https://github.com/victoriatrinita"
			aria-label="github profile"
		>
			<Github class="icon" width={24} height={24} fill="var(--martinique)" />
		</a>
		<a
			data-sveltekit-preload-data
			href="https://www.linkedin.com/in/victoria-trinita/"
			aria-label="linkedin profile"
		>
			<Linkedin class="icon" width={24} height={24} fill="var(--martinique)" />
		</a>
		<a
			data-sveltekit-preload-data
			href="https://discordapp.com/users/678792783527542794"
			aria-label="discord profile"
		>
			<Discord class="icon" width={24} height={24} fill="var(--martinique)" />
		</a>
	</section>

	<section>
		<p>
			Copyright &copy; 2022 &ndash; {new Date().getFullYear()} Victoria Trinita P. All Rights Reserved.
		</p>
		<p>
			Peek at this website's source code on <Link
				href="https://github.com/victoriatrinita/victoriatrinita.com/">Github</Link
			>!
		</p>
	</section>
</footer>

<style>
	footer {
		display: grid;
		gap: 0.5em;
		font-size: clamp(0.875em, 2vw, 1em);
		padding: 3em 1em;
		margin: auto auto 2.5em;
	}

	section {
		display: flex;
		justify-content: center;
	}

	section:first-of-type {
		flex-wrap: wrap;
		justify-content: center;
	}

	section:first-of-type a {
		margin: 0 1em;
	}

	section:nth-of-type(2) {
		text-align: center;
		display: grid;
		gap: 0.5em;
	}

	p:nth-of-type(2) {
		font-family: var(--font-mono);
		font-style: italic;
	}

	footer a:hover :global(.icon) {
		transition: fill 0.15s ease-in-out;
		fill: var(--moody-blue);
	}

	footer a {
		display: inline-block;
		vertical-align: middle;
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		transition-duration: 0.3s;
		transition-property: transform;
	}

	footer a:hover,
	footer a:focus,
	footer a:active {
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
	}
</style>
