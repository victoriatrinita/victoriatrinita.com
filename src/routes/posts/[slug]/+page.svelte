<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	export let data: import('./$types').PageData;
</script>

<Article>
	<section>
		{@html data.post.content}
	</section>
</Article>
