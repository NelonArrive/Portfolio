import styles from './Services.module.scss'
import { servicesData } from './services-data'
import { ServicesItem } from './services-item/ServicesItem'

export function Services() {
	return (
		<section className={styles.wrapper}>
			<h3 className={styles.title}>What I'm doing</h3>
			<ul className={styles.list}>
				{servicesData.map((item, index) => (
					<ServicesItem
						key={index}
						title={item.title}
						description={item.description}
						imgUrl={item.imgUrl}
					/>
				))}
			</ul>
		</section>
	)
}
