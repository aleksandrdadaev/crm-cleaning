'use client'

import { FC, PropsWithChildren } from 'react'

import NotificationProvider from '@/app/providers/notification/NotificationProvider'

import { HomeSidebar } from '@/widgets/home-sidebar'

import { useAuthRedirect } from '@/features/auth-redirect'

import styles from './HomeLayout.module.scss'
import Header from './header/Header'

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
	useAuthRedirect(true)

	return (
		<body className={styles.body}>
			<NotificationProvider>
				<Header />
				<HomeSidebar />
				{children}
			</NotificationProvider>
		</body>
	)
}
