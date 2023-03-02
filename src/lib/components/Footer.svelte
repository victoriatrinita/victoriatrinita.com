<script lang="ts">
	import { GithubIcon, LinkedinIcon } from 'svelte-feather-icons';
</script>

<footer>
	<section>
		<a data-sveltekit-preload-data href="https://github.com/victoriatrinita" aria-label="github profile">
			<GithubIcon />
		</a>
		<a data-sveltekit-preload-data href="https://www.linkedin.com/in/victoria-trinita/" aria-label="linkedin profile">
			<LinkedinIcon />
		</a>
	</section>

	<section>
		Copyright &copy; {new Date().getFullYear()} Victoria Trinita P. All Rights Reserved.
	</section>
</footer>

<style>
	footer {
		display: grid;
		gap: 1.5em;
		background: #ffffff;
		color: var(--mine-shaft);
		font-size: clamp(0.875em, 2vw, 1em);
		margin: auto auto 2em;
	}

	section {
		display: flex;
		justify-content: center;
	}

	section:first-of-type {
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 1.5em;
	}

	section:first-of-type a {
		margin: 0 1em;
	}
	section:nth-of-type(2) {
		margin-bottom: 1.5em;
		text-align: center;
	}

	a {
		color: var(--mine-shaft);
	}
</style>
