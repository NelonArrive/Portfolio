'use client'

import type { Metadata } from 'next'

import { Heading } from '@/components/ui'

import styles from './Portfolio.module.scss'
import { PortfolioItem } from './portfolio-item/PortfolioItem'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio'
}

const portfolioItem = [
	{
		title: 'App',
		imgUrl: '',
		category: 'Application'
	}
]

export function Portfolio() {
	return (
		<div>
			<Heading title='Portfolio' />
			<section className={styles.projects}>
				<ul className={styles.list}>
					{portfolioItem.length > 0
						? portfolioItem.map(item => (
								<PortfolioItem
									key={item.title}
									category={item.category}
									title={item.title}
									imgUrl={item.imgUrl}
								/>
							))
						: 'Not found projects'}
				</ul>
			</section>
		</div>
	)
}
