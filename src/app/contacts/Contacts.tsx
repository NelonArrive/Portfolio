'use client'

import { Heading } from '@/components/ui'

import { useTheme } from '@/hooks/useTheme'

import styles from './Contacts.module.scss'

export function Contacts() {
	const { isDarkMode } = useTheme()

	return (
		<>
			<Heading title='Contacts' />

			<div className={styles.map}>
				<iframe
					src={`https://yandex.ru/map-widget/v1/?ll=60.475066%2C56.788751&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjUzNxJP0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsyIKDdBjckIVIFpjQg%2C%2C&z=9.35${isDarkMode ? '&theme=dark' : ''}`}
					width='100%'
					height='380'
					allowFullScreen={true}
					style={{ position: 'relative', borderRadius: '16px' }}
				></iframe>
			</div>

			<div className=''>
				<h2 className={styles.title}>Contact Form</h2>
				<form
					className={styles.form}
					action='#'
				>
					<div className={styles.wrapper}>
						<input
							type='text'
							name='fullname'
							className={styles.formInput}
							placeholder='Full name'
						/>
						<input
							type='email'
							name='email'
							className={styles.formInput}
							placeholder='Email address'
						/>
					</div>

					<input
						type='text'
						name='subject'
						className={styles.formInput}
						placeholder='Subject'
					/>

					<textarea
						name='message'
						className={styles.formTextarea}
						placeholder='Your Message'
					/>

					<button
						className={styles.formBtn}
						type='submit'
					>
						<span>Send Message</span>
					</button>
				</form>
			</div>
		</>
	)
}
