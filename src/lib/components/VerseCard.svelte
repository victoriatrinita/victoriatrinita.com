<script lang="ts">
	interface Props {
		verse: import('$lib/types').Verse;
	}

	let { verse }: Props = $props();
</script>

<section>
	<a href={verse.id.link}>
		{verse.id.verse} ({verse.id.translation})
	</a>
	<p>{verse.id.content}</p>
	<hr />
	<a href={verse.en.link}>
		{verse.en.verse} ({verse.en.translation})
	</a>
	<p>{verse.en.content}</p>
	<hr />
	<a href={verse.ja.link}>
		{verse.ja.verse} ({verse.ja.translation})
	</a>
	<p>{verse.ja.content}</p>
</section>

<style>
	section {
		background-color: var(--wild-sand);
		border-radius: 20px;
		padding: 1em 1.5em;
		cursor: pointer;
		color: var(--martinique);
		transition: all 300ms ease-out;
		border: solid var(--alto) 1px;
		display: grid;
		gap: 0.25em;
	}

	section:hover {
		box-shadow: 0px 3.4359px 18px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.2em);
		background-color: var(--white-lilac);
		border: solid var(--lavender-gray) 1px;
	}
</style>
