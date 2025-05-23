import { BookOpen, BriefcaseBusiness } from 'lucide-react'
import Image from 'next/image'

import { Heading } from '@/components/ui'

import styles from './Resume.module.scss'

export function Resume() {
	return (
		<>
			<Heading title='Resume' />

			<div className={styles.card}>
				<div className={styles.cardItem}>
					<div className={styles.header}>
						<div className='icon-box'>
							<BookOpen />
						</div>
						<h3>Education</h3>
					</div>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<h4>Ural Industrial and Economic College</h4>
							<p>INFORMATION SYSTEMS AND PROGRAMMING</p>
							<span>September 2024 ~ May 2027</span>
						</li>
					</ul>
				</div>

				<div className={styles.cardItem}>
					<div className={styles.header}>
						<div className='icon-box'>
							<BriefcaseBusiness />
						</div>
						<h3>Experience</h3>
					</div>
					<div className={styles.listItem}>
						<h4>Web Developer</h4>
						<b>Freelance</b>&nbsp;
						<span>
							May, 2023 — September 2023 •<b> 3 mos</b>
						</span>
						<ul
							className={styles.list}
							style={{ listStyle: 'initial' }}
						>
							<li>layout, creation, refactoring, websites</li>
							<li>page optimization, css/js minification</li>
							<li>
								I made websites fast and SEO-friendly (setting up meta tags,
								validity the code)
							</li>
						</ul>
					</div>
				</div>
			</div>

			<a
				rel='noopener noreferrer'
				href='/Polovnikov David Alekseevich, Frontend developer.pdf'
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
