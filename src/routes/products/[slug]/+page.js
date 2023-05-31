import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

		const products = await pb.collection('products').getFullList({
		sort: 'created'
	})
	return {
		products
	}
}
