import clsx from 'clsx'
import { FC } from 'react'

import Icon from '@/shared/ui/icon/Icon'

import { ITableFilterButton } from '../model/types/table-filter-button.type'

import styles from './TableFilterButton.module.scss'

export const TableFilterButton: FC<ITableFilterButton> = ({
	iconPath,
	open,
	...rest
}) => {
	return (
		<button
			className={clsx(styles.button, {
				[styles.active]: open,
			})}
			{...rest}
		>
			<Icon src={iconPath} classes={styles.icon} />
		</button>
	)
}
