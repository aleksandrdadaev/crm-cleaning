'use client'

import { FC, useContext } from 'react'

import { useResendConfirmCode } from '@/features/resend-confirm-code'

import { UrlContext } from '@/shared/lib/utils/context.util'
import Button from '@/shared/ui/button/Button'

import { useTimer } from '../lib/hooks/useTimer'
import { transformTime } from '../lib/utils/transform-time.util'

import styles from './ConfirmResend.module.scss'

export const ConfirmResend: FC = () => {
	const url = useContext(UrlContext)
	const { secondsLeft, timer, toggleTimer } = useTimer(60)
	const { isLoading, mutate } = useResendConfirmCode(url)

	const onCLick = () => mutate({}, { onSuccess: () => toggleTimer() })

	return (
		<section className={styles.wrapper}>
			<span className={styles.timer}>
				{transformTime(Math.floor(secondsLeft / 60))}:
				{transformTime(secondsLeft % 60)}
			</span>
			{!timer && (
				<Button onClick={onCLick} isLoading={isLoading} className='!w-220'>
					Отправить еще раз
				</Button>
			)}
		</section>
	)
}
