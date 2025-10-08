<script lang="ts">
	interface Props {
		href?: string;
		label?: string;
		newTab?: boolean;
		children?: import('svelte').Snippet;
	}

	let { href = '', label = '', newTab = false, children }: Props = $props();
</script>

<a {href} target={newTab ? '_blank' : undefined} aria-label={label || undefined}>
	{@render children?.()}
</a>

<style>
	a:hover {
		transition: 0.1s ease-in-out;
		color: var(--moody-blue);
	}

	a {
		font-size: 0.75rem;
	}
</style>
