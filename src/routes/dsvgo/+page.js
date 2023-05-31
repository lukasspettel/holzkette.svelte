import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

    	const dsvgo = await pb.collection('pages').getOne('i64lr5f9d3hhz0z', {
		sort: 'created'
	})
	return {
        dsvgo
	}
}
