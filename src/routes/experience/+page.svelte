<script lang="ts">
	import Article from '$lib/pages/Article.svelte';
</script>

<Article>
	<div>
		<h1>Experience</h1>
		<h2>Work</h2>
		<ul>
			<li>
				<p>2024 — Present</p>
				<a href="https://www.ncj.co.jp/index.html" target="_blank" rel="noopener">NetChart Japan</a>
				<p>Software Engineer</p>
			</li>

			<li>
				<p>2023 — 2024</p>
				<a href="https://www.tripodworks.co.jp/" target="_blank" rel="noopener">TripodWorks Japan</a
				>
				<p>Software Engineer</p>
			</li>
		</ul>

		<h2>Certifications</h2>
		<ul>
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
	</div>
</Article>

<style>
	img {
		width: min(7.5rem, 30vw);
	}
</style>
