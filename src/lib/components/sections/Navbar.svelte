<script>
	import { fly, fade } from 'svelte/transition';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import logo from '$lib/assets/images/Holzkette_Logo_Green_Space.svg';

	let isNavbarActive = false;

	function ActivateNavbar() {
		isNavbarActive = !isNavbarActive;
	}
</script>

<flex-nav style="position:fixed;top:0">
	<div />
	<a href="/"><img src={logo} alt="Holzkette Logo" /></a>
	<button on:click={ActivateNavbar} class="button-closer">
		<div style="color:black"><FaBars /></div>
	</button>
</flex-nav>

{#if isNavbarActive}
	<button
		class="button-fullscreen-background"
		on:click={ActivateNavbar}
		transition:fly={{ duration: 800, y: 800 }}
	>
		<flex>
			<navigation>
				<a href="/"><h1>Home</h1></a>
				<a href="/products"><h1>Produkte</h1></a>
				<a href="/projects"><h1>Projekt</h1></a>
				<a href="/carrier"><h1>Träger</h1></a>
				<a href="/contact"><h1>Kontakt</h1></a>
				<a href="/press"><h1>Presse</h1></a>
			</navigation>
		</flex>
	</button>
{/if}

<style>
	.button-closer {
		border: none;
		margin-right: 2rem;
		width: 48px;
		height: 48px;
		background-color: rgba(255, 255, 255);
	}
	.button-fullscreen-background {
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		position: fixed;
		border: none;
		background-color: rgba(255, 255, 255, 0.9);
	}

	img {
		width: 244px;
	}

	navigation {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 1;
		height: 100%;
		width: 100%;
		justify-content: center;
	}
	flex-nav {
		background-color: rgba(255, 255, 255, 0.9);
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
		overflow: hidden;
		padding: 0.5rem;
	}
	flex {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		color: black;
		accent-color: gray;
		border-radius: 0;
		padding: 0.5rem;
	}
	a:hover {
		text-decoration: underline;
		color: var(--primary);
	}
	h1 {
		font-family: 'Bitter';
		letter-spacing: 0.25rem;
		font-size: 3rem;
		margin: 0;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 3rem;
		}
	}
</style>
