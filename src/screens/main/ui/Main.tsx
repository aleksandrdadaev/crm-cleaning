import Link from 'next/link'
import { FC } from 'react'

import styles from './Main.module.scss'

export const Main: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Link href={'/auth/signup'}>Зарегистрироваться</Link>
			<Link href={'/auth/signin'}>Войти</Link>
		</main>
	)
}
