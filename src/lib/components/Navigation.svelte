<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'svelte-feather-icons';
	import { afterNavigate } from '$app/navigation';

	let opened = $state(false);
	afterNavigate(() => (opened = false));

	let theme = $state<'light' | 'dark'>('light');
	const nextTheme = $derived(theme === 'dark' ? 'light' : 'dark');
	const ThemeIcon = $derived(nextTheme === 'dark' ? MoonIcon : SunIcon);
	const themeLabel = $derived(`Switch to ${nextTheme} mode`);

	onMount(() => {
		const system = window.matchMedia('(prefers-color-scheme: dark)');
		function syncTheme() {
			const saved = document.documentElement.style.colorScheme;
			theme = saved === 'dark' || saved === 'light' ? saved : system.matches ? 'dark' : 'light';
		}
		syncTheme();
		system.addEventListener('change', syncTheme);
		return () => system.removeEventListener('change', syncTheme);
	});

	function toggleTheme() {
		theme = nextTheme;
		document.documentElement.style.colorScheme = theme;
		try {
			localStorage.setItem('site-theme', theme);
		} catch {
			// The selected theme still applies when storage is unavailable.
		}
	}

	const menu = {
		about: 'about',
		posts: 'posts',
		haiku: 'haiku',
		books: 'books',
		cooklogs: 'cooklogs',
		verses: 'verses',
		experience: 'experience',
		cv: 'cv'
	};
</script>

<nav>
	<div class="logo">
		<a href="/"> VTP. </a>
	</div>

	<div id="site-links" class="links" class:opened>
		{#each Object.entries(menu) as [title, link]}
			<a class:active={page.url.pathname === `/${link}`} data-sveltekit-preload-data href="/{link}"
				>{title.toUpperCase()}</a
			>
		{/each}
	</div>
	<button class="theme" onclick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
		<ThemeIcon size="20" />
	</button>
	<button
		class="menu-toggle"
		aria-controls="site-links"
		aria-label="Menu"
		aria-expanded={opened}
		onclick={() => (opened = !opened)}
	>
		{#if opened}
			<XIcon size="24" />
		{:else}
			<MenuIcon size="24" />
		{/if}
	</button>
</nav>

<style>
	nav {
		padding: 0.5em 1em;
		height: 3.5em;
		background-color: var(--page-bg);
		display: flex;
		justify-content: space-between;
		top: 0;
		z-index: 1;
		font-family: 'Departure Mono', monospace;
	}

	button {
		cursor: pointer;
		display: flex;
		background: none;
		border: none;
		padding: 0;
	}

	.theme {
		align-self: center;
		width: 2.75rem;
		height: 2.75rem;
		align-items: center;
		justify-content: center;
		color: var(--text);
	}

	.logo {
		display: flex;
		align-items: center;

		a {
			font-size: 0.875rem;
			font-weight: 600;
			width: fit-content;
			position: relative;
			color: var(--brand);
		}
	}

	.menu-toggle {
		display: none;
	}

	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;

		a {
			display: flex;
			position: relative;
			height: 100%;
			align-items: center;
			padding: 0 0.75rem 0 0;
			color: var(--martinique);
			font-weight: 600;
			font-size: 0.875rem;
			text-decoration: none;
			transition: color 0.2s linear;
		}

		a:not(:last-child)::after {
			content: '•';
			margin-left: 0.57rem;
		}

		a::before {
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
	}

	@media (max-width: 840px) {
		nav {
			position: fixed;
			inset: auto 0 0;
			height: auto;
			align-items: center;
			gap: 0.25rem;
			padding: 0.25rem 1rem calc(0.25rem + env(safe-area-inset-bottom));
			z-index: 3;
			box-shadow: 0 -2px 10px rgb(0 0 0 / 10%);
		}

		.logo {
			margin-right: auto;
		}

		.menu-toggle {
			display: grid;
			place-items: center;
			width: 2.75rem;
			height: 2.75rem;
			color: var(--text);
		}

		.links {
			display: none;
			position: absolute;
			inset: auto 0 100%;
			padding: 0.5rem 1rem;
			max-height: calc(100dvh - 4rem - env(safe-area-inset-bottom));
			overflow-y: auto;
			background: var(--page-bg);
			box-shadow: 0 -4px 12px rgb(0 0 0 / 8%);
		}

		.links.opened {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.links a {
			min-height: 2.75rem;
			padding-inline: 0.5rem;
		}
		.links a:not(:last-child)::after {
			content: none;
		}
	}
</style>
