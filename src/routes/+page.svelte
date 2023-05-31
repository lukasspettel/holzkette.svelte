<script>
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
</script>

<container>
	<div><h1>{data.home.subheadline}</h1></div>
	<flex>
		<a href="/products/"><button><h1>Produkte</h1></button></a>
		<a href="/projects/"><button><h1>Projekt</h1></button></a>
	</flex>
	{@html data.home.description}

	<div>
		<h1>Produkte</h1>
		{#each data.products as product}
			<a href={`/products/${product.slug}`}
				><div style="padding-bottom:3rem;">
					<div style="border-left: 15px solid var(--primary);">
						<div style=" height:50%;padding-left:2rem;overflow:hidden">
							<div>
								<h2 style="text-align:left">{product.headline}</h2>
								<h3 style="text-align:left">{product.subheadline}</h3>
							</div>
							<img
								src={getImageURL(product.collectionId, product.id, product.image)}
								alt={product.headline}
							/>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</container>

<style>
	flex {
		display: flex;
		width: 100%;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
	}
	button {
		border: none;
		border-radius: 0.5rem;
		background-color: var(--primary);
		padding: 4rem 8rem 4rem 8rem;
		transition: scale 0.2s;
	}
	button:hover {
		scale: 1.1;
	}

	h1 {
		text-align: center;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 250px;
	}

	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		color: var(--primary);
	}
	container {
		gap: 6rem;
	}
</style>
