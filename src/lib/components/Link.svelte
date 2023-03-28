<script>
	export let href = '';
	export let label = '';
</script>

<a {href} aria-label={label || undefined}>
	<slot />
</a>

<style>
	a:hover {
		transition: 0.1s ease-in-out;
		color: var(--moody-blue);
	}
</style>
