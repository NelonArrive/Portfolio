import Image from 'next/image'

import styles from './PortfolioItem.module.scss'

interface IPortfolioItem {
	title: string
	category: string
	imgUrl: string
}

export function PortfolioItem({ title, category, imgUrl }: IPortfolioItem) {
	const q = 'https://fakeimg.pl/260x145?text=Image&font=bebas'

	return (
		<li className={styles.item}>
			<div className={styles.image}>
				<Image
					src={imgUrl ? imgUrl : q}
					alt='project'
					width={260}
					height={145}
				/>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.category}>{category}</p>
			</div>
		</li>
	)
}
