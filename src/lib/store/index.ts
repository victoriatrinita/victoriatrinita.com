import { onMount } from 'svelte';

export const mounted = {
	subscribe(fn: (state: boolean) => void) {
		fn(false);
		onMount(() => fn(true));
		return () => {};
	}
};
