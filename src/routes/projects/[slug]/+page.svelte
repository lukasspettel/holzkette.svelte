<script>
	import { page } from '$app/stores';
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
	import { Lightbox } from 'svelte-lightbox';
</script>

<container>
	{#each data.projects as project}
		{#if project.slug === $page.params.slug}
			<a href="/projects/"><h1>{project.headline}</h1></a>

			{#if project.image}
				<img
					src={getImageURL(project.collectionId, project.id, project.image)}
					alt={project.headline}
				/>
			{/if}
			{#if project.subheadline}
				<h2>{project.subheadline}</h2>
			{/if}
			{#if project.description}
				{@html project.description}
			{/if}
			{#if project.gallery}
				<flex>
					{#each project.gallery as image}
						<item>
							<Lightbox
								enableEscapeToClose={true}
								enableClickToClose={true}
								showCloseButton={false}
							>
								<img
									src={getImageURL(project.collectionId, project.id, image)}
									alt={''}
								/></Lightbox
							>
						</item>
					{/each}
				</flex>
			{/if}
			{#if project.expand.partners}
				<flex>
					{#each project.expand.partners as partner}
						<item>
							<a href={`${partner.link}`}
								><img
									src={getImageURL(partner.collectionId, partner.id, partner.logo)}
									alt={''}
								/></a
							></item
						>
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
		width: 25%;
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
