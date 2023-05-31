<script>
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
</script>

<container>
	<div>
		<a href="/"
			><h1>
				{data.carrier.headline}
			</h1></a
		>
		<h2 style="text-align:center">{data.carrier.subheadline}</h2>
		{#if data.carrier.description}
			{@html data.carrier.description}
		{/if}
		{#if data.carrier.image}
			<img
				src={getImageURL(data.carrier.collectionId, data.carrier.id, data.carrier.image)}
				alt={data.carrier.headline}
			/>
		{/if}
	</div>
	<flex>
		<flex>
			{#each data.partners as partner}
				<item>
					<a href={`${partner.link}`}
						><img src={getImageURL(partner.collectionId, partner.id, partner.logo)} alt={''} /></a
					></item
				>
			{/each}
		</flex>
	</flex>
</container>

<style>
	flex {
		display: flex;
		justify-content: space-between;
		width: 100%;
		flex-wrap: wrap;
		gap: 1rem;
		padding-bottom: 2rem;
	}
	flex item {
		overflow: hidden;
		width: 25%;
		flex-grow: 1;
		align-items: stretch;
	}
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
