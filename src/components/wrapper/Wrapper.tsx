import { PropsWithChildren } from 'react'

import styles from './Wrapper.module.scss'

export function Wrapper({ children }: PropsWithChildren) {
	return <article className={styles.wrapper}>{children}</article>
}
