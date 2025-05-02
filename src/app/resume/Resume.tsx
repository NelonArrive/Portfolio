import { Heading } from '@/components/ui'

import styles from './Resume.module.scss'

export function Resume() {
	return (
		<>
			<Heading title='My Resume' />
			<a
				rel='noopener noreferrer'
				href='/cv.pdf'
				target='_blank'
			>
				<button
					className={styles.btn}
					type='button'
				>
					Download CV
				</button>
			</a>
		</>
	)
}
