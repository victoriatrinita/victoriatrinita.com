<script lang="ts">
	interface Props {
		href?: string;
		label?: string;
		children?: import('svelte').Snippet;
	}

	let { href = '', label = '', children }: Props = $props();
</script>

<a {href} aria-label={label || undefined}>
	{@render children?.()}
</a>

<style>
	a:hover {
		transition: 0.1s ease-in-out;
		color: var(--moody-blue);
	}

	a {
		font-family: 'Departure Mono', monospace;
		font-size: 0.75rem;
	}
</style>
