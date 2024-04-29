'use client'

import { FC, PropsWithChildren } from 'react'

import NotificationProvider from '@/app/providers/notification/NotificationProvider'

import { AuthHeader } from '@/widgets/auth-header'

import { useAuthRedirect } from '@/features/auth-redirect'

import styles from './AuthLayout.module.scss'

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	useAuthRedirect()
	return (
		<body className={styles.body}>
			<NotificationProvider>
				<AuthHeader />
				{children}
			</NotificationProvider>
		</body>
	)
}
