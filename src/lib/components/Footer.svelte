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
		<p>
			Copyright &copy; 2022 &ndash; {new Date().getFullYear()} Victoria Trinita P. All Rights Reserved.
		</p>
		<p>
			Peek at this website's source code on <a
				href="https://github.com/victoriatrinita/victoriatrinita.com/">Github</a
			>!
		</p>
	</section>
</footer>

<style>
	footer {
		display: grid;
		gap: 0.5em;
		background: #ffffff;
		color: var(--mine-shaft);
		font-size: clamp(0.875em, 2vw, 1em);
		padding: 3em 1em;
		margin: auto auto 2.5em;
		font-family: var(--font-heading);
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
		color: var(--mine-shaft);
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
</style>
