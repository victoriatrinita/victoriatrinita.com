<script lang="ts">
	interface Props {
		post: import('$lib/types').Post;
	}

	let { post }: Props = $props();
</script>

<article>
	<time>{post.date.published}</time>
	<a href="posts/{post.slug}">
		{post.title}
	</a>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr 7fr;
	}
	/* small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	} */

	/* div {
		background-color: var(--wild-sand);
		border-radius: 20px;
		padding: 1em 1.5em;
		cursor: pointer;
		transition: all 300ms ease-out;
		border: solid var(--alto) 1px;
		display: grid;
		gap: 0.25em;
		height: 100%;
	} */

	/* div:hover {
		box-shadow: 0px 3.4359px 18px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.2em);
		background-color: var(--white-lilac);
		border: solid var(--lavender-gray) 1px;
	} */

	/* h3 {
		font-weight: 600;
		font-size: clamp(0.875rem, 2vw, 1rem);
	} */
</style>
