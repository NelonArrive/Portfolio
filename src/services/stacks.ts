import axios from 'axios'

export interface IResponseStacks {
	id: number
	title: string
	imgUrl: string
}

export interface IResponsePortfolio {
	title: string
	imgUrl: string
	category: 'Application' | 'Web development' | 'UI/UX'
	link: string
}

export const fetchStacks = async (): Promise<IResponseStacks[]> => {
	const response = await axios.get<IResponseStacks[]>(
		'https://a6034bdb59fbde04.mokky.dev/stacks'
	)
	return response.data
}

export const fetchPortfolio = async (): Promise<IResponsePortfolio[]> => {
	const response = await axios.get<IResponsePortfolio[]>(
		'https://a6034bdb59fbde04.mokky.dev/portfolio'
	)
	return response.data
}
