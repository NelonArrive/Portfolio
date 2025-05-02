'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTheme } from '@/hooks/useTheme'

import styles from './Heading.module.scss'

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
	const { isDarkMode, toggleTheme } = useTheme()

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
				<button
					className={styles.themeButton}
					onClick={toggleTheme}
					aria-label={
						isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
					}
				>
					<div
						className={`${styles.themeIconContainer} ${isDarkMode ? styles.dark : styles.light}`}
					>
						<svg
							className={styles.sunIcon}
							viewBox='0 0 45.16 45.16'
							fill='currentColor'
						>
							<path d='M22.58 11.269c-6.237 0-11.311 5.075-11.311 11.312s5.074 11.312 11.311 11.312c6.236 0 11.311-5.074 11.311-11.312S28.816 11.269 22.58 11.269zM22.58 7.944a2.207 2.207 0 0 1-2.207-2.206V2.207a2.207 2.207 0 1 1 4.414 0v3.531a2.207 2.207 0 0 1-2.207 2.206zM22.58 37.215a2.207 2.207 0 0 0-2.207 2.207v3.53a2.207 2.207 0 1 0 4.414 0v-3.53a2.208 2.208 0 0 0-2.207-2.207zM32.928 12.231a2.208 2.208 0 0 1 0-3.121l2.497-2.497a2.207 2.207 0 1 1 3.121 3.121l-2.497 2.497a2.207 2.207 0 0 1-3.121 0zM12.231 32.93a2.205 2.205 0 0 0-3.121 0l-2.497 2.496a2.207 2.207 0 0 0 3.121 3.121l2.497-2.498a2.204 2.204 0 0 0 0-3.119zM37.215 22.58c0-1.219.988-2.207 2.207-2.207h3.531a2.207 2.207 0 1 1 0 4.413h-3.531a2.206 2.206 0 0 1-2.207-2.206zM7.944 22.58a2.207 2.207 0 0 0-2.207-2.207h-3.53a2.207 2.207 0 1 0 0 4.413h3.531a2.206 2.206 0 0 0 2.206-2.206zM32.928 32.93a2.208 2.208 0 0 1 3.121 0l2.497 2.497a2.205 2.205 0 1 1-3.121 3.12l-2.497-2.497a2.205 2.205 0 0 1 0-3.12zM12.231 12.231a2.207 2.207 0 0 0 0-3.121L9.734 6.614a2.207 2.207 0 0 0-3.121 3.12l2.497 2.497a2.205 2.205 0 0 0 3.121 0z' />
						</svg>
						<svg
							className={styles.moonIcon}
							viewBox='0 0 312.999 312.999'
							fill='currentColor'
						>
							<path d='M305.6 178.053c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.8 60-32.8 96.4 0 43.6 17.6 83.2 46.4 112s68.4 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 2-6-1.2-11.6-6.8-12.8zm-61.2 83.6c-23.2 18.4-52.8 29.6-85.2 29.6-38 0-72.4-15.6-97.2-40.4-24.8-24.8-40.4-59.2-40.4-97.2 0-31.6 10.4-60.4 28.4-83.6 12.4-16 28-29.2 46-38.4-2 4.4-4 8.8-5.6 13.6-5.2 14.4-7.6 29.6-7.6 45.6 0 38 15.6 72.8 40.4 97.6s59.6 40.4 97.6 40.4c16.8 0 32.8-2.8 47.6-8.4 5.2-2 10.4-4 15.2-6.4-9.6 18.4-22.8 34.8-39.2 47.6z' />
						</svg>
					</div>
				</button>
			</div>
		</header>
	)
}
