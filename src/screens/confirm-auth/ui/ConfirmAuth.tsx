import { FC } from 'react'

import { ConfirmAuthForm } from '@/widgets/confirm-auth-form'
import { ConfirmResend } from '@/widgets/confirm-resend'

import SubHeading from '@/shared/ui/headings/sub-heading/SubHeading'

import styles from './ConfirmAuth.module.scss'

export const ConfirmAuth: FC = () => {
	return (
		<main className={styles.wrapper}>
			<SubHeading classname={styles.heading}>
				Введите код, отправленный на указанный номер телефона
			</SubHeading>
			<ConfirmAuthForm />
			<ConfirmResend />
		</main>
	)
}
