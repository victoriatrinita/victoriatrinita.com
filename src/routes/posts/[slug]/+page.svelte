<script lang="ts">
	import Article from '$lib/pages/Article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Article>
	<section>
		{@html data.post.content}
	</section>
</Article>
