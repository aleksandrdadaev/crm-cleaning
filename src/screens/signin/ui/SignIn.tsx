import Link from 'next/link'
import { FC } from 'react'

import { SignInForm } from '@/widgets/signin-form'

import Heading from '@/shared/ui/headings/heading/Heading'

import styles from './SignIn.module.scss'

export const SignIn: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Heading classname={styles.heading}>Вход</Heading>
			<SignInForm />
			<Link href={'/auth/signup'} className={styles.regLink}>
				Зарегистрироваться
			</Link>
		</main>
	)
}
