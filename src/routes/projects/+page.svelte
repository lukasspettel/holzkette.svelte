<script>
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
</script>

<container>
	<div>
		<a href="/"
			><h1>
				{data.project.headline}
			</h1></a
		>
		{#if data.project.image}
			<img
				src={getImageURL(data.project.collectionId, data.project.id, data.project.image)}
				alt={data.project.headline}
			/>
		{/if}
		<h2 style="text-align:center">{data.project.subheadline}</h2>
	</div>
	<div>
		{#each data.projects as project}
			<a href={`/projects/${project.slug}`}
				><div style="padding-bottom:3rem">
					<div style="border-left: 15px solid var(--primary);">
						<div style=" height:50%;padding-left:2rem">
							<div>
								<h2 style="text-align:left">{project.headline}</h2>
								<h3 style="text-align:left">{project.subheadline}</h3>
							</div>
							<img
								src={getImageURL(project.collectionId, project.id, project.image)}
								alt={project.headline}
							/>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</container>

<style>
	img {
		object-fit: cover;
		max-height: 350px;
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
