import Link from 'next/link'
import { FC } from 'react'

import { RegisterForm } from '@/widgets/register-form'

import Heading from '@/shared/ui/headings/heading/Heading'

import styles from './SignUp.module.scss'

export const SignUp: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Heading classname={styles.heading}>Регистрация</Heading>
			<RegisterForm />
			<div className={styles.footer}>
				<span>Уже есть аккаунт?</span>
				<Link href={'/auth/signin'} className={styles.signLink}>
					Войти
				</Link>
			</div>
		</main>
	)
}
