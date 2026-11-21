<main>
	<h1>Experience</h1>
	<h2>Work</h2>
	<ul class="work">
		<li>
			<p>2024 — Present</p>
			<a href="https://www.ncj.co.jp/index.html" target="_blank" rel="noopener">NetChart Japan</a>
			<p>Software Engineer</p>
		</li>

		<li>
			<p>2023 — 2024</p>
			<a href="https://www.tripodworks.co.jp/" target="_blank" rel="noopener">TripodWorks Japan</a>
			<p>Software Engineer</p>
		</li>
	</ul>

	<h2>Certifications</h2>
	<ul class="certifications">
		<li>
			<p>AWS Certified AI Practitioner</p>
			<p>Amazon Web Services · 2026</p>
			<a
				href="https://www.credly.com/badges/00a6668f-c874-4d00-8797-8efba6d10435/public_url"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="assets/experience/aws-ai-practitioner.png"
					alt="AWS Certified AI Practitioner badge"
				/>
			</a>
		</li>
		<li>
			<p>JLPT N2</p>
			<p>Japanese Language Proficiency · 2026</p>
		</li>
	</ul>
</main>

<style>
	main {
		padding: clamp(2em, 3vw, 4em) 1em;
		line-height: 1.5;
	}

	h1 {
		margin: 1em 0 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		text-align: center;
	}

	h2 {
		margin-top: 2.5rem;
		font-size: clamp(1.3125rem, 3vw, 1.625rem);
		font-weight: 600;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		display: grid;
		column-gap: 1.25rem;
		padding-block: 1.25rem;
	}

	.work a,
	.certifications p:first-child {
		font-size: 1.1875rem;
		font-weight: 600;
	}

	.work a {
		justify-self: start;
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.work p:first-child {
		font: 0.875rem/1.5 var(--font-mono);
	}

	.certifications li {
		grid-template-columns: minmax(0, 1fr) auto;
	}

	.certifications p {
		grid-column: 1;
	}

	.certifications a {
		grid-column: 2;
		grid-row: 1 / span 2;
		align-self: center;
	}

	img {
		display: block;
		width: clamp(3.5rem, 12vw, 5rem);
	}

	@media (min-width: 36rem) {
		.work li {
			grid-template-columns: 11rem 1fr;
		}

		.work p:first-child {
			grid-row: span 2;
		}
	}
</style>
