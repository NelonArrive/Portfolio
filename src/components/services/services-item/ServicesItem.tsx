import Image from 'next/image'
import styles from './ServicesItem.module.scss'

interface IServicesItem {
	title: string
	description: string
	imgUrl: string
}

export function ServicesItem({ title, description, imgUrl }: IServicesItem) {
	return (
		<li className={styles.item}>
			<div className={styles.icon}>
				<Image
					src={imgUrl}
					alt={title}
					width={90}
					height={90}
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.text}>{description}</p>
			</div>
		</li>
	)
}
