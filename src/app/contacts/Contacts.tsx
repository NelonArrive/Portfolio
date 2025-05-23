'use client'

import emailjs from '@emailjs/browser'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Heading } from '@/components/ui'

import styles from './Contacts.module.scss'

type FormData = {
	fullname: string
	email: string
	subject: string
	message?: string
}

export function Contacts() {
	const { resolvedTheme } = useTheme()
	const formRef = useRef<HTMLFormElement | null>(null)
	const [isSent, setIsSent] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { isValid, isSubmitting },
		reset
	} = useForm<FormData>({
		mode: 'onChange'
	})

	const onSubmit = async (data: FormData) => {
		if (!formRef.current) return
		try {
			await emailjs.sendForm(
				'service_t73tcc9',
				'template_gce1ned',
				formRef.current,
				'CeR_7P-DuXn_zqoxt'
			)
			setIsSent(true)
			reset()
		} catch (err) {
			console.error('Ошибка отправки:', err)
		}
	}

	return (
		<>
			<Heading title='Contacts' />

			{resolvedTheme && (
				<div className={styles.map}>
					<iframe
						src={`https://yandex.ru/map-widget/v1/?ll=60.475066%2C56.788751&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjUzNxJP0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsyIKDdBjckIVIFpjQg%2C%2C&z=9.35${
							resolvedTheme === 'dark' ? '&theme=dark' : ''
						}`}
						width='100%'
						height='380'
						allowFullScreen
						style={{ position: 'relative', borderRadius: '16px' }}
					></iframe>
				</div>
			)}

			<div>
				<h2 className={styles.title}>Contact Form</h2>
				<form
					ref={formRef}
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className={styles.wrapper}>
						<input
							{...register('fullname', { required: true })}
							type='text'
							name='fullname'
							className={styles.formInput}
							placeholder='Full name'
						/>
						<input
							{...register('email', { required: true })}
							type='email'
							name='email'
							className={styles.formInput}
							placeholder='Email address'
						/>
					</div>

					<input
						{...register('subject', { required: true })}
						type='text'
						name='subject'
						className={styles.formInput}
						placeholder='Subject'
					/>

					<textarea
						{...register('message')}
						name='message'
						className={styles.formTextarea}
						placeholder='Your Message'
					/>

					<button
						className={styles.formBtn}
						type='submit'
						disabled={!isValid || isSubmitting}
					>
						<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
					</button>

					{isSent && <p className={styles.success}>Message sent! ✅</p>}
				</form>
			</div>
		</>
	)
}
