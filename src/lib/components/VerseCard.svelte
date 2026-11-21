<script lang="ts">
	interface Props {
		verse: import('$lib/types').Verse;
	}

	let { verse }: Props = $props();
	const languages = ['id', 'en', 'ja'] as const;
</script>

<article>
	{#each languages as language}
		{@const passage = verse[language]}
		<div lang={language}>
			<a href={passage.link}>
				{passage.verse} <small>{passage.translation}</small>
			</a>
			<p>{passage.content}</p>
		</div>
	{/each}
</article>

<style>
	article {
		display: grid;
		gap: 1.25rem;
		padding: clamp(1rem, 3vw, 1.75rem);
		border: 1px solid var(--alto);
		border-radius: 0.5rem;
		background: var(--surface);
	}

	a {
		color: var(--moody-blue);
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	small {
		margin-inline-start: 0.35em;
		color: var(--dusty-gray);
		font: 0.75rem/1.5 var(--font-mono);
	}

	p {
		margin-top: 0.35rem;
		line-height: 1.65;
	}
</style>
