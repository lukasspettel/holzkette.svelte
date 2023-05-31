<script>
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
</script>

<container>
	<a href="/"
		><h1>
			{data.impressum.headline}
		</h1></a
	>
	{@html data.impressum.description}
</container>

<style>
	container {
		gap: 1rem;
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
