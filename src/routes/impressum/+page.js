import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

    	const impressum = await pb.collection('pages').getOne('hwrh3z3r5xxntsd', {
		sort: 'created'
	})
	return {
        impressum
	}
}
