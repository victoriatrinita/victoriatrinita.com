<script lang="ts">
	export let post: {
		slug: string;
		title: string;
		tags: string[];
		language: string;
		description: string;
		date: {
			published: string | Date;
			updated?: string | Date;
		};
	};
</script>

<a href="posts/{post.slug}">
	<section>
		<h3>{post.title}</h3>
		<small>{post.description}</small>
		<footer>
			<small>{post.date.published}</small>
		</footer>
		<div>
			{#each post.tags as tag}
				<small>{tag}</small>
			{/each}
		</div>
	</section>
</a>

<style>
	small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	}

	section {
		background-color: #f4f4f4;
		border-radius: 20px;
		padding: 1em 1.5em;
		cursor: pointer;
		color: var(--martinique);
		/* box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.14); */
		transition: all 300ms ease-out;
		border: solid #cecece 1px;
		display: grid;
		gap: 0.25em;
	}

	section:hover {
		/* box-shadow: 0px 3.4359px 38px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.5em); */
		background-color: #efedf8;
		border: solid #cec2dc 1px;
	}

	h3 {
		font-weight: 500;
		font-size: clamp(1.125rem, 2vw, 1.25rem);
	}

	div {
		display: flex;
	}
</style>
