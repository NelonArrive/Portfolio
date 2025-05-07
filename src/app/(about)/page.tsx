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
