import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

		const projects = await pb.collection('projects').getFullList({
		sort: 'created',
	})
    	const project = await pb.collection('pages').getOne('1foru0ee9437m83', {
		sort: 'created'
	})
	return {
		projects,
        project
	}
}
