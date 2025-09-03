<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	//   export let data;
	interface Props {
		data: import('./$types').PageData;
	}

    let { data }: Props = $props();
</script>

<h1 class="text-2xl font-bold mb-4">{data.year}/{data.month}</h1>

<Article showProgress={true}>
	<section>
		{#each data.items as h}
        <div class="text-sm opacity-70">{h.weekday}, {h.slug}</div>
			{@html h.content}
            {console.log(h.content)}
		{/each}
	</section>
</Article>



<!-- <ul class="space-y-6"> -->
	<!-- {#each data.items as h} -->
		<!-- <li class="border rounded-lg p-4"> -->
		
			<!-- <article class="prose max-w-none mt-2"> -->
				<!-- {@html h.content} -->
				<!-- parser.ts already ran marker.render -->
			<!-- </article> -->
		<!-- </li> -->
	<!-- {/each} -->
<!-- </ul> -->
