'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

import { Heading } from '@/components/ui'

import styles from './page.module.scss'
import { SkillsItem } from '@/components'
import { fetchStacks } from '@/services/stacks'

export default function Home() {
	const {
		data: techStack = [],
		isLoading,
		isError
	} = useQuery({
		queryKey: ['stacks'],
		queryFn: fetchStacks
	})

	return (
		<>
			<Heading title='About Me' />

			<section className={styles.aboutText}>
				<p>
					A passionate Flutter developer with strong expertise in cross-platform
					apps, REST APIs, UI/UX, widgets, and state management solutions...
				</p>
				<p>
					If you're seeking a skilled Flutter developer... Reach out, and let's
					transform your vision into a reality!
				</p>
			</section>

			<section className={styles.service}>
				<h3 className={styles.serviceTitle}>What I'm doing</h3>
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
									Professional development of applications for Android and iOS.
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>

			<section className={styles.skills}>
				<h3 className={styles.skillsTitle}>Skills</h3>
				{isLoading && <p>Loading...</p>}
				{isError && <p>Something went wrong...</p>}
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
