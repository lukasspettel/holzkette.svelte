<script>
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import bgImage from '$lib/assets/images/background/Topographic Map Patterns_4.svg';
</script>

<svelte:head>
	<title>holzkette</title>
</svelte:head>
<background style="background-image: url('{bgImage}')" />
<Navbar />
<slot />
<Footer />

<style global>
	@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Bitter&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Urbanist&display=swap');

	[data-theme='light'],
	:root:not([data-theme='dark']) {
		font-family: 'Urbanist';
		--primary: #bec9be;
	}
	:root::-webkit-scrollbar {
		width: 0.25rem;
	}

	:root::-webkit-scrollbar-track {
		background: gray;
	}

	:root::-webkit-scrollbar-thumb {
		background: black;
	}
	:global(h1) {
		font-family: 'Bitter';
		text-align: center;
		font-size: 3rem;
	}
	:global(h2) {
		font-family: 'Urbanist';
		text-align: center;
		font-size: 2.25rem;
	}
	:global(h3) {
		font-size: 1.75rem;
		text-align: center;
	}
	:global(p) {
		font-family: 'Urbanist';
		font-size: 1.25rem;
		letter-spacing: 0.1rem;
		line-height: 1.75rem;
		text-align: justify;
	}
	:global(container) {
		padding: 10rem 15rem 5rem 15rem;
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
	:global(img) {
		width: 100%;
		height: 100%;
	}
	background {
		opacity: 0.05;
		width: 100%;
		height: 100%;
		z-index: -3;
		position: fixed;
		background-position: center;
		background-repeat: repeat;
		background-size: cover;
	}
</style>
