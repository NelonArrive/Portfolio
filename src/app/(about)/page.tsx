import Image from 'next/image'

import { Heading } from '@/components/ui'

import { techStack } from '../../../data'

import styles from './page.module.scss'
import { SkillsItem } from '@/components'

export default function Home() {
	return (
		<>
			<Heading title='About Me' />
			<section className={styles.aboutText}>
				<p>
					A passionate Flutter developer with strong expertise in cross-platform
					apps, REST APIs, UI/UX, widgets, and state management solutions.
					Proven track record in delivering cutting-edge solutions, including
					API integration, third-party libraries, and performance optimization.
					Adept at debugging to ensure high-quality, responsive apps and An
					agile collaborator committed to staying current with industry trends.
				</p>
				<p>
					If you're seeking a skilled Flutter developer to breathe life into
					your project and exceed your expectations, I am here to collaborate
					and create magic together. Reach out, and let's transform your vision
					into a reality!
				</p>
			</section>

			<section className={styles.service}>
				<h3 className={styles.serviceTitle}>What i'm doing</h3>
				<ul className={styles.serviceList}>
					{[...Array(4)].map((_, i) => (
						<li
							key={i}
							className={styles.serviceItem}
						>
							<div className={styles.serviceIcon}>
								<Image
									src='/backend.svg'
									alt='backend'
									width={90}
									height={90}
									className={styles.serviceImage}
								/>
							</div>
							<div className={styles.serviceContent}>
								<h4 className={styles.serviceItemTitle}>Mobile Apps</h4>
								<p className={styles.serviceText}>
									Professional development of applications for Android and ios.
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>

			<section className={styles.skills}>
				<h3 className={styles.skillsTitle}>Skills</h3>
				<ul className={styles.skillsList}>
					{techStack.map(({ title, imgUrl }) => (
						<SkillsItem
							key={title}
							title={title}
							imgUrl={imgUrl}
						/>
					))}
				</ul>
				<p>...and many more!</p>
			</section>
		</>
	)
}
