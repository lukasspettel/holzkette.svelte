import PocketBase from 'pocketbase'

const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`)

export const load = async () => {

		const projects = await pb.collection('projects').getFullList({
		sort: 'created',
		expand: 'partners'
	})
	return {
		projects
	}
}
