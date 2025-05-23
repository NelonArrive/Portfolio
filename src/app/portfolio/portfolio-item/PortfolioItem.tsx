import Image from 'next/image'
import Link from 'next/link'

import styles from './PortfolioItem.module.scss'

interface IPortfolioItem {
	title: string
	category: string
	imgUrl: string
	link: string
}

export function PortfolioItem({
	title,
	category,
	imgUrl,
	link
}: IPortfolioItem) {
	const fakeImg = 'https://fakeimg.pl/260x145?text=Image&font=bebas'

	return (
		<li className={styles.item}>
			<a
				target='_blank'
				href={link}
			>
				<div className={styles.image}>
					<Image
						priority
						src={imgUrl ? imgUrl : fakeImg}
						alt={title}
						width={260}
						height={145}
					/>
				</div>
			</a>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.category}>{category}</p>
			</div>
		</li>
	)
}
