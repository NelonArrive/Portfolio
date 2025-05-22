'use client'

import { useQuery } from '@tanstack/react-query'

import styles from './Skills.module.scss'
import { SkillsItem } from './skills-item/SkillsItem'
import { fetchStacks } from '@/services/stacks'

export function Skills() {
	const {
		data: techStack = [],
		isLoading,
		isError
	} = useQuery({
		queryKey: ['stacks'],
		queryFn: fetchStacks
	})

	return (
		<section className={styles.wrapper}>
			<h3 className={styles.title}>Skills</h3>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Something went wrong...</p>}
			<ul className={styles.list}>
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
	)
}
