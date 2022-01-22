<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About | Victoria T P</title>
</svelte:head>

<div class="wrapper">
	<header>
		<img src="about/ori.jpg" alt="Self Portrait" />
	</header>

	<div>
		<h2>About Self</h2>
		<p>
			Hello, I am Victoria Trinita Pardede, a final year Information Engineering student at
			Universitas Gadjah Mada. I enjoy exploring the world of web development.
		</p>
	</div>

	<div>
		<h2>This Website's Backstory</h2>
		<p>
			I remember in primary school, our teachers used to assign us to make scrapbooks that showcases
			certain information. The topics that I still remember were 'types of traditional houses' and
			'different kinds of animals'. I gathered information from books at the library and printed
			pictures from the internet. I wrote down the information that I found important and glued the
			matching pictures above. Through that, I found that I enjoy making scrapbooks.
			<br /> <br />
			From there, I tried making my personal scrapbook that contains information about anything—something
			like an encyclopedia, but self-made. It was filled with article and picture cutouts from magazines
			and newspapers. I made it with the hopes of having my own place to refer to when I need information
			about anything. Eventually, I realize that it is the idea of
			<b>collecting things I find useful from various places in one place</b>
			that I find interesting.
			<br /> <br />
			Hence, it became the foundation of this website creation. That is, so that I have a place to keep
			all the things that I want to look back and refer to later on or in the future. But, different
			from my childhood "encyclopedia", this website may not contain informational stuffs. The original
			intention is to keep a documentation of my thoughts and the things I like and find meaningful for
			myself that I can easily digest when I come back to it.
			<br /> <br />
			Other than that, in my 21st year of living, I realise that I love looking back at what I have written
			or posted online when I was younger. I get to know my own self, years ago. I just somehow feel
			content when I look back at them. However, an issue that I foresee is, just like how my answers
			and questions on Yahoo Answers went gone as the platform closed down early 2021, my posts on my
			current social medias might also face the same fate. We never know for sure. There
			<i>are</i> ways to download the data—and I did keep a copy of my Yahoo Answers questions and
			answers in the form of screenshots as well as generated JSON provided by the platform before
			it closed down—but it will never feel the same as scrolling and surfing through the platform
			itself.
			<br /> <br />
			Therefore, I thought, by creating my own platform, <i>I</i> get to manage its fate. As long as
			I have the whole code that builds up the platform (along with its backups, of course) I can
			always keep what I have created until I actually delete it myself—which I would never think of
			doing. This does consume a lot more effort, but hey, developing and maintaining websites and
			web apps is what I do for a living so this counts as a media to hone my skills too.
			<br /> <br />
			Lastly, keeping things centralised in this platform is also an effort to minimalise having a hard
			time trying to remember the places I have ever posted on like if they were scattered in different
			places. Also, I need not to worry and hassle much when other platforms that I use or used to use,
			go out of business. Not that I intend to refrain from using other platforms at all though, as they
			do serve other purposes not coverable in this static web.
			<br /> <br />
			Wrapping up, I hope this place stays as a permanent "encyclopedia" for my future self :)
		</p>
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em;
		margin: auto;
		max-width: 80ch;
	}

	header {
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	div {
		padding-bottom: 1.5em;
	}

	img {
		height: clamp(200px, 25vw, 300px);
		padding-bottom: clamp(1em, 3vw, 2em);
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

	p {
		font-size: clamp(1rem, 2vw, 1.125rem);
		line-height: 1.8rem;
	}
</style>
