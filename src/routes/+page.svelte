<script lang="ts">
	$: innerWidth = 0;
</script>

<svelte:head>
	<title>Home | Victoria T P</title>
</svelte:head>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<header>
		<img src="header/ori.svg" alt="Girl working on laptop illustration" />
		<div>
			{#if innerWidth > 600}
				<h1>A collection of favourites and thoughts</h1>
			{:else}
				<h1>A collection of favourites</h1>
				<h1>and thoughts</h1>
			{/if}
		</div>
	</header>

	<div>
		<h2>About</h2>
		<p>
			Hi there! I'm Victoria, a final year Information Engineering student. I enjoy exploring in the
			world of web development. I also have an obsession of keeping a documentation of the things I
			think, like, and find meaningful. Those two, combined, is why I created this little space on
			the internet.
		</p>
		<br />
		<a href="/about">More info...</a>
	</div>

	<div>
		<h2>Recent Posts</h2>
		<p>No posts yet.</p>
	</div>

	<div>
		<h2>Tags</h2>
		<p>No tags yet.</p>
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em;
		margin: auto;
		max-width: 84ch;
	}

	header {
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	header div {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	div {
		padding-bottom: 1.5em;
	}

	img {
		height: clamp(240px, 25vw, 375px);
		padding-bottom: clamp(1em, 3vw, 2em);
	}

	h1 {
		font-weight: 500;
		font-size: clamp(1.5rem, 3vw, 2rem);
		width: fit-content;
		position: relative;
	}

	h2 {
		font-weight: 500;
		font-size: clamp(1.5rem, 3vw, 2rem);
		width: fit-content;
		position: relative;
		margin-bottom: 0.5em;
	}

	h2::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: #e8d8ff;
	}

	h1::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: #c7fcc6;
	}

	p {
		font-size: clamp(1rem, 2vw, 1.125rem);
		line-height: 1.8rem;
	}
</style>
