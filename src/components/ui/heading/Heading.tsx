'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Heading.module.scss'
import ThemeSwitch from './ThemeSwitch'

interface IHeading {
	title: string
}

const navLinks = [
	{ label: 'About', href: '/', imgUrl: '/navbar/about.svg' },
	{ label: 'Resume', href: '/resume', imgUrl: '/navbar/resume.svg' },
	{ label: 'Portfolio', href: '/portfolio', imgUrl: '/navbar/portfolio.svg' },
	{ label: 'Contacts', href: '/contacts', imgUrl: '/navbar/contacts.svg' }
]

export function Heading({ title }: IHeading) {
	const pathname = usePathname()

	return (
		<header className={styles.heading}>
			<div className={styles.title}>
				<h1>{title}</h1>
			</div>
			<div className={styles.navWrapper}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{navLinks.map(({ label, href, imgUrl }) => (
							<li
								key={label}
								className={styles.item}
							>
								<Link
									className={`${styles.link}${pathname === href ? ` ${styles.active}` : ''}`}
									href={href}
								>
									<div className={styles.icon}>
										<Image
											src={imgUrl}
											alt=''
											width={30}
											height={30}
										/>
									</div>
									<span>{label}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<button className={styles.themeButton}>
					<ThemeSwitch />
				</button>
			</div>
		</header>
	)
}
