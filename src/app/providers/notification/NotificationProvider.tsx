'use client'

import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CloseNotificationButton } from '@/features/close-notification-button'

import styles from './NotificationProvider.module.scss'

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{children}
			<ToastContainer
				position='bottom-right'
				className={styles.container}
				toastClassName={styles.toast}
				bodyClassName={styles.body}
				closeButton={({ closeToast }) => (
					/* @ts-ignore */
					<CloseNotificationButton closeToast={closeToast} />
				)}
				draggable
				closeOnClick
				icon={false}
			/>
		</>
	)
}

export default NotificationProvider
