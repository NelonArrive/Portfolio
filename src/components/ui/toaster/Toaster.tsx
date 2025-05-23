'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

import styles from './Toaster.module.scss'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			toastOptions={{
				classNames: {
					toast: styles.toast,
					description: styles.description,
					actionButton: styles.action,
					cancelButton: styles.cancel
				}
			}}
			{...props}
		/>
	)
}

export { Toaster }
