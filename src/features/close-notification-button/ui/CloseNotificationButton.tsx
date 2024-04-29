import { FC } from 'react'
import { ToastContentProps } from 'react-toastify'

import closeIcon from '@/shared/assets/icons/close.svg'
import Icon from '@/shared/ui/icon/Icon'

import styles from './CloseNotificationButton.module.scss'

export const CloseNotificationButton: FC<ToastContentProps> = ({
	closeToast,
}) => {
	return (
		<button onClick={closeToast} className={styles.wrapper}>
			<Icon src={closeIcon} />
		</button>
	)
}
