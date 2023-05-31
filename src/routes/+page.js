import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {
	const products = await pb.collection('products').getFullList({
		sort: 'created',
	})
	const pages = await pb.collection('pages').getFullList({
		sort: 'created'
	})
	const home = await pb.collection('pages').getOne('2vrkzghbhn4ic2u', {
		sort: 'created'
	})
	return {
		products,
		pages,
		home
	}
}
