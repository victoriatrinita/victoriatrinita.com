<script lang="ts">
	import Book from '$lib/pages/Book.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Book book={data.book} />
