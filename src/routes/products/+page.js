import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {
	const products = await pb.collection('products').getFullList({
		sort: 'created',
	})

    	const product = await pb.collection('pages').getOne('jlv6slldywz6qoy', {
		sort: 'created'
	})
	return {
		products,
        product
	}
}
