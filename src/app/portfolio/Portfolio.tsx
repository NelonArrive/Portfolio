'use client'

import { useQuery } from '@tanstack/react-query'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui'

import styles from './Portfolio.module.scss'
import { PortfolioItem } from './portfolio-item/PortfolioItem'
import { fetchPortfolio } from '@/services/stacks'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio'
}

export function Portfolio() {
	const { data: portfolioItem = [], isLoading } = useQuery({
		queryKey: ['portfolio'],
		queryFn: fetchPortfolio
	})

	return (
		<div>
			<Heading title='Portfolio' />
			<section className={styles.projects}>
				<ul className={styles.list}>
					{isLoading ? (
						'Loading...'
					) : portfolioItem.length > 0 ? (
						portfolioItem.map(item => (
							<PortfolioItem
								key={item.title}
								category={item.category}
								title={item.title}
								imgUrl={item.imgUrl}
								link={item.link}
							/>
						))
					) : (
						<p>So far, the projects are under development... 😒</p>
					)}
				</ul>
			</section>
		</div>
	)
}
