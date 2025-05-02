import axios from 'axios'

export interface IResponseStacks {
	id: number
	title: string
	imgUrl: string
}

export const fetchStacks = async (): Promise<IResponseStacks[]> => {
	const response = await axios.get<IResponseStacks[]>(
		'https://a6034bdb59fbde04.mokky.dev/stacks'
	)
	return response.data
}
