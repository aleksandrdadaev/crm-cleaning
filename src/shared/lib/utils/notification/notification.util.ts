import { toast } from 'react-toastify'

import styles from './notification.module.scss'

export const notificationSuccess = (text: string | undefined) =>
	toast.success(text, {
		progressClassName: styles.success,
	})

export const notificationError = (text: string | undefined) =>
	toast.error(text, {
		progressClassName: styles.error,
	})

export const notificationInfo = (text: string | undefined) =>
	toast.info(text, {
		progressClassName: styles.info,
	})

export const notificationWarning = (text: string | undefined) =>
	toast.warning(text, {
		progressClassName: styles.warning,
	})
