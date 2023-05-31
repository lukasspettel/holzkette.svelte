<script>
	import logo from '$lib/assets/images/Holzkette_Logo_Green_Space.svg';
</script>

<footer style="border-top:15px solid var(--primary)">
	<flex>
		<div>
			<a href="/"><img src={logo} alt="Holzkette Logo" /></a>
		</div>
		<div>
			<a href="/products/"><h4>Produkte</h4></a>
			<flex style="flex-direction:column">
				<a href="/products/holzkette-digital">Holzkette Digital</a>
				<a href="/products/marktplatz">Marktplatz</a>
				<a href="/products/forstgis">ForstGIS</a>
			</flex>
		</div>
		<div>
			<a href="/projects/"><h4>Projekt</h4></a>
			<flex style="flex-direction:column">
				<a href="/projects/about">About</a>
				<a href="/projects/projektverlauf">Projektverlauf</a>
				<a href="/projects/berichte">Berichte</a>
			</flex>
		</div>

		<div>
			<a href="/press/"><h4>Presse</h4></a>
			<flex style="flex-direction:column">
				<a href="/press/">Archiv</a>
				<a href="/press/">Pressepacket</a>
			</flex>
		</div>
		<div>
			<a href="/carrier/"><h4>Träger</h4></a>
		</div>
		<div>
			<a href="/contact/"><h4>Kontakt</h4></a>
		</div>
		<div>
			<h1 />
			<div />
			<flex style="flex-direction:column">
				<a href="/dsvgo">DSVGO</a>
				<a href="/impressum">Impressium</a>
			</flex>
		</div>
	</flex>
</footer>

<style>
	flex {
		justify-content: space-between;
		display: flex;
	}
	img {
		width: 244px;
	}
	footer {
		padding: 2rem;
		padding-left: 5rem;
		padding-right: 5rem;
		background-color: white;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: black;
		accent-color: gray;
		border-radius: 0;
		padding: 0.25rem;
	}
	a:hover {
		text-decoration: underline;
		color: var(--primary);
	}
</style>
