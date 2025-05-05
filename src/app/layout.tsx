import type { Metadata, Viewport } from 'next'
import { Geist_Mono } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'
import { Providers } from './providers'
import { Sidebar, Wrapper } from '@/components'

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		default: 'Nelon Arrive',
		template: `%s | ${SITE_NAME}`
	},
	description: 'Frontend Developer'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={geistMono.className}>
				<Providers>
					<main>
						<Sidebar />
						<Wrapper>{children}</Wrapper>
					</main>
				</Providers>
			</body>
		</html>
	)
}
