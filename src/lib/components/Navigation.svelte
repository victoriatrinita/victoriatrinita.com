<script lang="ts">
	import { page } from '$app/state';
	import { capitalize } from '$lib/utils/utils';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';
	let y: number = $state(0);
	let innerWidth = $state(0);

	let opened = $state(false);

	const menu = {
		about: 'about',
		posts: 'posts',
		haiku: 'haiku',
		cooklogs: 'cooklogs',
		verses: 'verses',
		cv: 'cv'
	};
</script>

<svelte:window bind:scrollY={y} bind:innerWidth />

<nav class={y > 1 ? 'shadowed' : ''}>
	<div class="logo">
		<a href="/"> VTP. </a>
	</div>

	{#if innerWidth < 600}
		<button onclick={() => (opened = !opened)}>
			{#if opened}
				<XIcon size="24" />
			{:else}
				<MenuIcon size="24" />
			{/if}
		</button>
	{/if}

	{#if innerWidth > 600 || opened}
		<div class="menu" transition:slide={{ duration: opened ? 100 : 0 }}>
			{#each Object.entries(menu) as [title, link]}
				<a
					class:active={page.url.pathname === `/${link}`}
					data-sveltekit-preload-data
					href="/{link}">{title.toUpperCase()}</a
				>
				•
			{/each}
		</div>
	{/if}
</nav>

<style>
	nav {
		padding: 0.5em 1em;
		height: 3.5em;
		background-color: var(--white);
		display: flex;
		justify-content: space-between;
		/* position: sticky; */
		top: 0;
		z-index: 1;
		font-family: 'Departure Mono', monospace;
	}

	nav > button {
		cursor: pointer;
		display: flex;
		color: var(--martinique);
		background: none;
		border: none;
		padding: 0;
	}

	.shadowed {
		filter: drop-shadow(0px 4px 8px rgba(142, 142, 142, 0.15));
		transition: 500ms linear;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.logo a {
		font-size: 0.875rem;
		font-weight: 600;
		width: fit-content;
		position: relative;
		color: oklch(0.5058 0.2886 264.84);
	}

	.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.menu a {
		display: flex;
		position: relative;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--martinique);
		font-weight: 600;
		font-size: 0.875rem;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.menu a::before {
		content: '';
		position: absolute;
		background: var(--beauty-bush);
		height: 0.5em;
		bottom: 10px;
		z-index: -1;
		left: 0;
		right: 0;
		margin: 0 1em;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.25s ease-in-out;
	}

	.menu a:hover::before {
		transform-origin: left;
		transform: scaleX(1);
	}

	.menu a.active::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 10px;
		z-index: -1;
		left: 0;
		right: 0;
		margin: 0 1em;
		background: var(--beauty-bush);
	}

	@media only screen and (max-width: 600px) {
		.logo p {
			font-size: 0.6rem;
		}

		nav {
			position: fixed;
			top: unset;
			bottom: 0;
			height: unset;
			width: 100%;
			align-items: center;
			z-index: 3;
			box-shadow: 0px -4px 8px rgba(152, 152, 152, 0.12);
		}

		.menu a.active::after {
			bottom: 2px;
		}

		.menu {
			display: flex;
			flex-direction: column;
			padding: 1em;
			justify-content: center;
			width: 100%;
			position: absolute;
			top: 1px;
			left: 0;
			gap: 1em;
			box-shadow: 0px -4px 8px rgba(152, 152, 152, 0.12);
			transform: translateY(-100%);
			background: var(--white);
		}
	}
</style>
