<script lang="ts">
	import Article from '$lib/pages/Article.svelte';

	function downloadPDF() {
		// Logic to trigger PDF download (e.g., window.print() or a direct link)
		window.print();
	}
</script>

<div class="page-background">
	<div class="action-bar">
		<button onclick={downloadPDF} class="download-btn">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline
					points="7 10 12 15 17 10"
				/><line x1="12" y1="15" x2="12" y2="3" /></svg
			>
			Download PDF
		</button>
	</div>

	<main class="paper">
		<Article>
			<header>
				<h1>Victoria Trinita Pardede</h1>
				<div class="contact-grid">
					<span>victoriapardede@gmail.com</span>
					<span>Tokyo, Japan</span>
					<a href="http://linkedin.com/in/victoria-trinita-pardede">LinkedIn</a>
					<a href="https://github.com/victoriatrinita">GitHub</a>
					<a href="https://victoriatrinita.com">GitHub</a>
				</div>
			</header>

			<div class="divider"></div>

			<section>
				<h2 class="section-label">01. Experience</h2>

				<div class="job">
					<div class="job-header">
						<h3>Net Chart Japan Inc.</h3>
						<span class="date">2024 — Present</span>
					</div>
					<p class="role">Software Engineer</p>
					<ul>
						<li>
							Architecting multi-tenant systems using <strong>NestJS</strong> and
							<strong>Prisma</strong>.
						</li>
						<li>
							Leading frontend migration to <strong>Svelte 5</strong> to optimize reactivity and performance.
						</li>
					</ul>
				</div>

				<div class="job">
					<div class="job-header">
						<h3>TripodWorks Co., Ltd.</h3>
						<span class="date">2023 — 2024</span>
					</div>
					<p class="role">Software Engineer</p>
					<ul>
						<li>
							Developed enterprise-level applications utilizing <strong>TypeScript</strong> for full-stack
							reliability.
						</li>
						<li>Collaborated on system design to improve application scalability.</li>
					</ul>
				</div>
			</section>

			<section>
				<h2 class="section-label">02. Education</h2>
				<div class="education">
					<div class="job-header">
						<h3>Universitas Gadjah Mada</h3>
						<span class="date">2018 — 2022</span>
					</div>
					<p>Bachelor of Engineering (B.Eng.) in Information Engineering</p>
					<p class="gpa">GPA: 3.63 / 4.00</p>
				</div>
			</section>

			<section>
				<h2 class="section-label">03. Technical</h2>
				<div class="skills-grid">
					<div><strong>Core:</strong> TypeScript, JavaScript, SQL</div>
					<div><strong>Frameworks:</strong> Svelte 5, SvelteKit, NestJS</div>
					<div><strong>Tools:</strong> Prisma, Docker, PostgreSQL</div>
				</div>
			</section>

			Language Japanese Indonesian English
		</Article>
	</main>
</div>

<style>
	/* Physical Paper Aesthetic */
	.page-background {
		background-color: var(--light-gray);
		min-height: 100vh;
		padding: 40px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Inter', sans-serif;
	}

	.paper {
		background: white;
		width: 100%;
		max-width: 800px;
		min-height: 1056px; /* A4 Ratio */
		padding: 60px 80px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
		color: var(--mine-shaft-dark);
	}

	/* Action Bar */
	.action-bar {
		width: 100%;
		max-width: 800px;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
	}

	.download-btn {
		background: var(--black);
		color: var(--white);
		border: none;
		padding: 10px 20px;
		border-radius: 4px;
		font-size: 0.85rem;
		font-family: 'JetBrains Mono', monospace;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: opacity 0.2s;
	}

	.download-btn:hover {
		opacity: 0.8;
	}

	/* Typography */
	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -1px;
	}

	.contact-grid {
		display: flex;
		gap: 15px;
		font-size: 0.85rem;
		color: var(--dusty-gray);
		margin-top: 10px;
		flex-wrap: wrap;
	}

	.contact-grid a {
		color: inherit;
		text-decoration: none;
		border-bottom: 1px solid var(--alto);
	}

	.divider {
		height: 1px;
		background: var(--black);
		margin: 40px 0;
	}

	.section-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		text-transform: uppercase;
		color: var(--royal-blue);
		margin-bottom: 30px;
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	h3 {
		font-size: 1.25rem;
		margin: 0;
		font-weight: 600;
	}
	.date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		color: var(--silver);
	}
	.role {
		font-style: italic;
		margin: 4px 0 10px 0;
		color: var(--mako);
	}

	ul {
		padding-left: 20px;
		margin-bottom: 30px;
	}
	li {
		margin-bottom: 8px;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
		font-size: 0.9rem;
	}

	/* Print Styles: Ensures the button disappears when printing */
	@media print {
		.page-background {
			padding: 0;
			background: white;
		}
		.action-bar {
			display: none;
		}
		.paper {
			box-shadow: none;
			padding: 0;
			width: 100%;
		}
	}
</style>
