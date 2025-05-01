'use client'

import { useEffect, useState } from 'react'

export function useTheme() {
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			const isDark = savedTheme === 'dark'
			setIsDarkMode(isDark)
			document.documentElement.setAttribute(
				'data-theme',
				isDark ? 'dark' : 'light'
			)
		} else {
			localStorage.setItem('theme', 'dark')
			document.documentElement.setAttribute('data-theme', 'dark')
		}
	}, [])

	const toggleTheme = () => {
		const newMode = !isDarkMode
		setIsDarkMode(newMode)
		localStorage.setItem('theme', newMode ? 'dark' : 'light')
		document.documentElement.setAttribute(
			'data-theme',
			newMode ? 'dark' : 'light'
		)
	}

	return { isDarkMode, toggleTheme }
}
