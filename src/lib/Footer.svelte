<footer>
	<section>
		<a sveltekit:prefetch href="https://github.com/victoriatrinita">github</a>
		<a sveltekit:prefetch href="https://www.linkedin.com/in/victoria-trinita/">linkedin</a>
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
		color: #333333;
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
</style>
