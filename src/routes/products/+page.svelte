<script>
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
</script>

<container>
	<div>
		<a href="/"
			><h1>
				{data.product.headline}
			</h1></a
		>
		<h2 style="text-align:center">{data.product.subheadline}</h2>
		<img
			src={getImageURL(data.product.collectionId, data.product.id, data.product.image)}
			alt={data.product.headline}
		/>
	</div>
	<div>
		{#each data.products as product}
			<a href={`/products/${product.slug}`}
				><div style="padding-bottom:3rem">
					<div style="border-left: 15px solid var(--primary);">
						<div style=" height:50%;padding-left:2rem">
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
	container {
		padding: 10rem 15rem 0rem 15rem;
		display: flex;
		flex-direction: column;
		gap: 6rem;
	}
	img {
		object-fit: cover;
		max-height: 500px;
		width: 100%;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		color: var(--primary);
	}
	h1 {
		font-size: 5rem;
		margin-bottom: 0;
	}
</style>
