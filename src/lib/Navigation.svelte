<script lang="ts">
	import { page } from '$app/stores';
	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<nav class={y > 1 ? 'shadowed' : ''}>
	<div class="logo">
		<a href="/">
			<p>Victoria Trinita</p>
			<p>Pardede</p>
		</a>
	</div>

	<div class="links">
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.url.pathname === '/posts'}><a sveltekit:prefetch href="/posts">Posts</a></li>
		</ul>
	</div>
</nav>

<style>
	nav {
		padding: 0.5em 1em;
		height: 2.5em;
		background-color: #ffff;
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	.shadowed {
		filter: drop-shadow(0px 4px 8px rgba(142, 142, 142, 0.15));
		transition: 500ms linear;
	}

	.logo {
		z-index: 1;
	}

	.logo p {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--heading-color);
		width: fit-content;
		position: relative;
	}

	.logo p::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: #fff8ba;
	}

	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.links a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 500;
		font-size: 1rem;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 14px;
		z-index: -1;
		left: 0;
		right: 0;
		margin: 0 1em;
		background: #f0c2c2;
	}
</style>
