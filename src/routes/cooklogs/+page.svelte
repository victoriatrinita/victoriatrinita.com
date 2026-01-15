<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="max-w-6xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-8">Cooklogs</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.cooklogs as post}
			<a
				href="/cooklogs/{post.slug}"
				class="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
			>
				<div class="aspect-video relative overflow-hidden bg-gray-100">
					{#if post.image}
						<img
							src={post.image}
							alt={post.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
					{:else}
						<div class="flex items-center justify-center h-full text-gray-400">No Image</div>
					{/if}
				</div>
				<div class="p-4">
					<div class="flex justify-between items-start mb-2">
						<span class="text-xs font-mono text-gray-400">#{post.id}</span>
						<time class="text-xs text-gray-500">{post.date_cooked}</time>
					</div>
					<h2 class="text-lg font-bold group-hover:text-orange-600 transition-colors">
						{post.title}
					</h2>
				</div>
			</a>
		{/each}
	</div>
</div>
