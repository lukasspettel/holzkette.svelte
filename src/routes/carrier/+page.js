import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

    	const carrier = await pb.collection('pages').getOne('va21tpqvrvpvd4g', {
		sort: '-created'
	})
			const partners = await pb.collection('partners').getFullList({
		sort: '-created',
	})
	return {
        carrier,
		partners
	}
}
