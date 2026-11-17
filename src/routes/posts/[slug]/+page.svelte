<script lang="ts">
	/* 1. Use $props to get the data from +page.server.ts */
	let { data } = $props();

	/* 2. Use $derived so these update every time the 'slug' changes */
	let post = $derived(data.post);
	let metadata = $derived(data.metadata);
	let switcher = $derived(data.languageSwitcher);
	let activeLocale = $derived(data.activeLocale);
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.description} />
</svelte:head>

<main>
	<nav class="lang-switcher">
		<span>Read in:</span>
		{#each switcher as item}
			{#if item.locale !== activeLocale}
				<a href="/posts/{item.slug}">
					{item.locale.toUpperCase()}
				</a>
			{:else}
				<span class="current-lang">{item.locale.toUpperCase()}</span>
			{/if}
		{/each}
	</nav>

	<article>
		<header>
			<h1>{post.title}</h1>
			<div class="meta">
				<time>{metadata.date_published}</time>
				{#if metadata.tags}
					<div class="tags">
						{#each metadata.tags as tag}
							<span>#{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<hr />

		<div class="prose">
			{@html post.content}
		</div>
	</article>
</main>

<style>
	main {
		max-width: 70ch;
		margin: auto;
		padding: 2rem 1rem;
	}

	.lang-switcher {
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
		font-size: 0.85rem;
		color: var(--oslo-gray);
	}

	.lang-switcher a {
		color: var(--martinique);
		text-decoration: underline;
		font-weight: 600;
	}

	.current-lang {
		font-weight: 400;
		opacity: 0.5;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 3rem);
		line-height: 1.1;
		margin-bottom: 0.5rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		color: var(--oslo-gray);
		font-size: 0.9rem;
	}

	.prose {
		line-height: 1.8;
		font-size: 1.125rem;
	}

	hr {
		margin: 2rem 0;
		border: 0;
		border-top: 1px solid var(--alto);
	}
</style>
