import { Services } from '@/components/services/Services'
import { Skills } from '@/components/skills/Skills'
import { Heading } from '@/components/ui'

import styles from './About.module.scss'

export function About() {
	return (
		<>
			<Heading title='About Me' />

			<section className={styles.text}>
				<p>
					A passionate Frontend Developer crafting elegant web interfaces with
					React, Next.js & TypeScript. I bring strong UI/UX skills, adaptive
					layouts, performance tuning & state management mastery (Zustand,
					Redux, React Query).
				</p>
				<p>
					If you're looking for someone who codes with purpose and design in
					mind — let's bring your ideas to life!
				</p>
			</section>

			<Services />
			<Skills />
		</>
	)
}
