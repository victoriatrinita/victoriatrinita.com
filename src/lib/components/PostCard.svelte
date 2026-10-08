<!-- <script lang="ts">
    // Define the structure of the incoming post based on our new parser
    interface Props {
        post: {
            id: string;
            tags: string[];
            date_published: string;
            locales: string[];
            translations: Record<string, {
                title: string;
                description: string;
                slug: string;
            }>;
        };
    }

    let { post }: Props = $props();

    // 1. Set the initial language (default to first available)
    let activeLocale = $state(post.locales[0]);

    // 2. Reactively get the content for the selected language
    let content = $derived(post.translations[activeLocale]);
</script>

<div class="card-container">
    <div class="tabs">
        {#each post.locales as locale}
            <button 
                class:active={activeLocale === locale} 
                onclick={() => activeLocale = locale}
            >
                {locale.toUpperCase()}
            </button>
        {/each}
    </div>

    <a href="posts/{activeLocale}/{content.slug || post.id}">
        <section>
            <h3>{content.title}</h3>
            <small class="description">{content.description}</small>
            
            <footer>
                <small>{post.date_published}</small>
            </footer>

            <div class="tags">
                {#each post.tags as tag}
                    <small class="tag">#{tag}</small>
                {/each}
            </div>
        </section>
    </a>
</div>

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    /* Tab Styles */
    .tabs {
        display: flex;
        gap: 0.5em;
        padding-left: 0.5em;
    }

    .tabs button {
        background: var(--wild-sand);
        border: 1px solid var(--alto);
        border-radius: 8px 8px 0 0;
        padding: 4px 12px;
        font-size: 0.7rem;
        cursor: pointer;
        color: var(--oslo-gray);
        transition: all 200ms;
    }

    .tabs button.active {
        background: var(--lavender-gray);
        color: var(--martinique);
        font-weight: 600;
        border-bottom: 2px solid var(--martinique);
    }

    /* Your Existing Styles */
    small {
        font-size: clamp(0.8rem, 2vw, 0.875rem);
    }

    .description {
        color: var(--oslo-gray);
    }

    section {
        background-color: var(--wild-sand);
        border-radius: 20px;
        /* If tabs are active, maybe flatten top corners: border-radius: 0 20px 20px 20px; */
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

    h3 {
        font-weight: 600;
        font-size: clamp(1.125rem, 2vw, 1.25rem);
        margin: 0;
    }

    .tags {
        display: flex;
        gap: 0.75em;
        margin-top: 0.5em;
    }

    .tag {
        color: var(--oslo-gray);
    }

    a {
        text-decoration: none;
    }
</style> -->
<script lang="ts">
	// Define the structure of the incoming post based on our new parser
	interface Props {
		post: {
			id: string;
			tags: string[];
			date_published: string;
			locales: string[];
			translations: Record<
				string,
				{
					title: string;
					description: string;
					slug: string;
				}
			>;
		};
	}

	let { post }: Props = $props();

	// 1. Set the initial language (default to first available)
	let activeLocale = $state(post.locales[0]);

	// 2. Reactively get the content for the selected language
	let content = $derived(post.translations[activeLocale]);
</script>

<div class="card-container">
	<div class="tabs">
		{#each post.locales as locale}
			<button class:active={activeLocale === locale} onclick={() => (activeLocale = locale)}>
				{locale.toUpperCase()}
			</button>
		{/each}
	</div>

	<a href="/posts/{content.slug || post.id}">
		<section>
			<h3>{content.title}</h3>
			<small class="description">{content.description}</small>

			<footer>
				<small>{post.date_published}</small>
			</footer>

			<div class="tags">
				{#each post.tags as tag}
					<small class="tag">#{tag}</small>
				{/each}
			</div>
		</section>
	</a>
</div>

<style>
	/* ... existing styles remain unchanged ... */
	.card-container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.tabs {
		display: flex;
		gap: 0.5em;
		padding-left: 0.5em;
	}

	.tabs button {
		background: var(--wild-sand);
		border: 1px solid var(--alto);
		border-radius: 8px 8px 0 0;
		padding: 4px 12px;
		font-size: 0.7rem;
		cursor: pointer;
		color: var(--oslo-gray);
		transition: all 200ms;
	}

	.tabs button.active {
		background: var(--lavender-gray);
		color: var(--martinique);
		font-weight: 600;
		border-bottom: 2px solid var(--martinique);
	}

	small {
		font-size: clamp(0.8rem, 2vw, 0.875rem);
	}

	.description {
		color: var(--oslo-gray);
	}

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

	h3 {
		font-weight: 600;
		font-size: clamp(1.125rem, 2vw, 1.25rem);
		margin: 0;
	}

	.tags {
		display: flex;
		gap: 0.75em;
		margin-top: 0.5em;
	}

	.tag {
		color: var(--oslo-gray);
	}

	a {
		text-decoration: none;
	}
</style>
