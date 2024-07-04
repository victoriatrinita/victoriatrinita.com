<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	export let data: import('./$types').PageData;
</script>

<Article showProgress={true}>
	<section>
		{@html data.post.content}
	</section>
</Article>
