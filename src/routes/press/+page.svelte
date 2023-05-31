<script>
	export let data;
	import { getImageURL } from '$lib/utils/getURL';
</script>

<container>
	<div>X</div>
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
