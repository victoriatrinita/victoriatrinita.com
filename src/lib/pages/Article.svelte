<article>
	<slot />
</article>

<style>
	article {
		word-wrap: break-word;
		line-height: 1.5;
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 80ch;
	}
	article :global(section) {
		margin-top: 2em;
		font-size: clamp(1rem, 2vw, 1.15rem);
	}
	article > :global(section:first-of-type) {
		margin-top: 1em;
	}

	article :global(section > :first-child) {
		margin: 0;
	}
	article :global(section p),
	article :global(section li) {
		line-height: 2rem;
	}

	article :global(blockquote p) {
		line-height: unset;
	}

	article :global(p) {
		font-size: clamp(1rem, 2vw, 1.15rem);
		line-height: 1.8rem;
		margin-top: 0.75em;
	}
	article :global(p code),
	article :global(ol code),
	article :global(ul code) {
		font-size: clamp(0.8rem, 2vw, 1rem);
	}
	article :global(img) {
		max-height: 42em;
		margin: auto;
		border-radius: var(--b-radius);
		text-align: center;
	}
	article :global(img[src*="://"])
	{
		border: none;
		border-radius: var(--b-radius);
		text-align: center;
	}
	article :global(h2),
	article :global(h3) {
		font-weight: 700;
		width: fit-content;
		position: relative;
	}

	article :global(h2::after) {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: var(--blue-chalk);
	}

	article :global(h2) {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
	}
	article :global(h2 + h3) {
		margin-top: 0.5em;
	}
	article :global(h3) {
		margin: 1em 0 -0.25em;
		font-size: clamp(1.2rem, 4vw, 1.5rem);
	}
	article :global(ol + h3),
	article :global(ul + h3) {
		margin-top: 1.25em;
	}
	article :global(ol),
	article :global(ul) {
		padding: 0;
		padding-left: 0.5em;
		margin: 0;
		margin-top: 0.75em;
		margin-bottom: -0.5em;
	}
	article :global(ol li:not(:only-child):last-child),
	article :global(ul li:not(:only-child):last-child) {
		margin-bottom: 1em;
	}
	article :global(li) {
		margin-left: 1em;
	}
	article :global(li > ol),
	article :global(li > ul) {
		margin: 0;
	}
	article :global(blockquote) {
		line-height: 1.5;
		text-align: center;
		font-style: italic;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		margin: clamp(0.5em, 3vw, 1.5em);
	}
	article :global(blockquote li) {
		margin-left: unset;
	}
	article :global(strong) {
		font-weight: bolder;
	}
	article :global(hr) {
		height: 0.1em;
		margin-top: 2em;
		border: 0;
		background-color: var(--fg-surface);
	}

	article :global(figure) {
		margin: 1em 0 2em;
	}
	article :global(details) {
		margin: 1em 0;
	}
</style>
