import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

    	const press = await pb.collection('pages').getOne('io5upa2g7qawtg0', {
		sort: 'created'
	})
	return {
        press
	}
}
