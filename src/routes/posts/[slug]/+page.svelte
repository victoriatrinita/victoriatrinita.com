<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<Article showProgress={true}>
	<section>
		{@html data.post.content}
	</section>
</Article>
{console.log(data.post.content)}