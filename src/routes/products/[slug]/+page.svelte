<script>
	import { page } from '$app/stores';
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
	import { Lightbox } from 'svelte-lightbox';
</script>

<container>
	{#each data.products as product}
		{#if product.slug === $page.params.slug}
			<a href="/products/"><h1>{product.headline}</h1></a>
			{#if product.subheadline}
				<h2>{product.subheadline}</h2>
			{/if}
			{#if product.image}
				<img
					src={getImageURL(product.collectionId, product.id, product.image)}
					alt={product.headline}
				/>
			{/if}

			{#if product.description}
				{@html product.description}
			{/if}
			{#if product.gallery}
				<h2>Gallerie</h2>
				<flex>
					{#each product.gallery as image}
						<item>
							<Lightbox
								enableEscapeToClose={true}
								enableClickToClose={true}
								showCloseButton={false}
							>
								<img
									src={getImageURL(product.collectionId, product.id, image)}
									alt={''}
								/></Lightbox
							>
						</item>
					{/each}
				</flex>
			{/if}
		{/if}
	{/each}
</container>

<style>
	flex {
		display: flex;
		justify-content: space-between;
		width: 100%;
		flex-wrap: wrap;
		gap: 1rem;
	}
	flex item {
		overflow: hidden;
		width: 45%;
		flex-grow: 1;
		align-items: stretch;
	}
	img {
		align-items: center;
		object-fit: cover;
		width: 100%;
	}

	a {
		text-decoration: none;
		color: black;
		accent-color: gray;
		border-radius: 0;
		padding: 0.5rem;
	}
	a:hover {
		color: var(--primary);
	}
	h1 {
		font-size: 5rem;
		margin-bottom: 0;
	}
</style>
