
import Image from 'next/image'

import styles from './SkillsItem.module.scss'

interface ISkillsItem {
	title: string
	imgUrl: string
}

export function SkillsItem({ title, imgUrl }: ISkillsItem) {
	return (
		<li className={styles.item}>
			<div className={styles.icon}>
				<Image
					src={imgUrl}
					alt={title}
					width={23}
					height={23}
					className={styles.image}
				/>
			</div>
			<div className={styles.text}>{title}</div>
		</li>
	)
}
