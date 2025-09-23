<script lang="ts">
	interface Props {
		haiku: import('$lib/types').Haiku;
	}

	let { haiku }: Props = $props();
</script>

<a href="posts/{haiku.date}">
	<section>
		{haiku.date}
		<div>
			<div class="haiku-en">
				{#each haiku.en as line}
					<p>{line}</p>
				{/each}
			</div>
			<div class="haiku-ja">
				{#each haiku.ja as line}
					<p>{line}</p>
				{/each}
			</div>
		</div>
	</section>
</a>

<style>
	small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	}

	section {
		/* background-color: var(--wild-sand); */
		/* border-radius: 20px; */
		padding: 1em 1.5em;
		cursor: pointer;
		color: var(--martinique);
		transition: all 300ms ease-out;
		/* border: solid var(--alto) 1px; */

		background-image: url('/assets/dotted.svg');
		background-repeat: no-repeat;
		background-size: cover; /* fill container, crop if needed */
		background-position: center;
		/* grid-template-columns: 1fr 1fr 1fr; */
		/* gap: 0.25em; */
	}

	section:hover {
		box-shadow: 0px 3.4359px 18px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.2em);
		background-color: var(--white-lilac);
		border: solid var(--lavender-gray) 1px;
	}

	/* h3 {
		font-weight: 600;
		font-size: clamp(1.125rem, 2vw, 1.25rem);
	} */

	/* div {
		display: flex;
	} */
</style>
