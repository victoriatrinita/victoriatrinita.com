<script lang="ts">
	interface Props {
		src: string;
		alt: string;
	}

	let { src, alt }: Props = $props();
</script>

<div class="tape">
	<div class="polaroid">
		<img {src} {alt} />
	</div>
</div>

<style>
	img {
		height: clamp(12.5em, 25vw, 15.625em);
		width: clamp(11em, 20vw, 13.5em);
		object-fit: cover;
	}

	.polaroid {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		padding: 1.25em 0.75em 2.75em;
		background: var(--white);
	}

	.tape {
		position: relative;
		margin: 1.25em auto 0.625em;
	}

	.tape:before,
	.tape:after {
		background: var(--pavlova);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		content: '';
		display: fixed;
		height: 1.875em;
		position: absolute;
		margin: auto;
		width: 6.25em;
	}

	.tape:before {
		left: -1.25em;
		top: 0.4375em;
		transform: rotate(-30deg);
		border-color: var(--white);
		left: -1.0625em;
	}

	.tape:after {
		bottom: 0.625em;
		right: -1.25em;
		transform: rotate(-45deg);
		border-color: var(--white);
		right: -1.25em;
	}
</style>
