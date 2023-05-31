import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

    	const contact = await pb.collection('pages').getOne('cmnzsm6h083yw53', {
		sort: '-created'
	})
	return {
        contact
	}
}
