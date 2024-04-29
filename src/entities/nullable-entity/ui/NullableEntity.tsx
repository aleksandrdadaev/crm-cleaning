import { FC, PropsWithChildren } from 'react'

import nullIcon from '@/shared/assets/icons/null.svg'
import Icon from '@/shared/ui/icon/Icon'

import styles from './NullableEntity.module.scss'

export const NullableEntity: FC<PropsWithChildren<{ value: any }>> = ({
	children,
	value,
}) => {
	return value === null ? (
		<div className={styles.wrapper}>
			<Icon src={nullIcon} />
		</div>
	) : (
		children
	)
}
