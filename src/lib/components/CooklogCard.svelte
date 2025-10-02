<script lang="ts">
	interface Props {
		cooklog: import('$lib/types').Cooklog;
	}

	let { cooklog }: Props = $props();
</script>

<a href="/">
	<section>
		<p>[{cooklog.id}]</p>
		<small>{cooklog.title}</small>
	</section>
</a>

<style>
	p {
		font-family: var(--font-mono);
		color: #858585;
		font-size: clamp(0.5rem, 2vw, 0.75rem);
	}
	small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	}

	section {
		border-radius: 3px;
		padding: 1em 1.5em;
		cursor: pointer;
		transition: all 300ms ease-out;
		display: grid;
		gap: 0.25em;

		background-image: url('/assets/grid.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	section:hover {
		box-shadow: 0px 3.4359px 18px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.2em);
		background-color: var(--white-lilac);
		border: solid var(--lavender-gray) 1px;
	}
</style>
