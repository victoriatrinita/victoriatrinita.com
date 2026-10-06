<script lang="ts">
	import Article from '$lib/pages/Article.svelte';
</script>

<Article>
	<div>
		<h1>Experience</h1>
		<h2>Work</h2>
		<div>
			<p>2024 — Present NetChart Japan</p>
			<p>Software Engineer</p>
		</div>

		<h2>Certifications</h2>
		<div>
			<p>AWS Certified AI Practitioner Amazon Web Services · 2026</p>
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
			<p>JLPT N2 Japanese Language Proficiency· 2026</p>
		</div>
	</div>
</Article>

<style>
	img {
		width: min(7.5rem, 30vw);
	}
</style>
