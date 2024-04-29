import { FC, PropsWithChildren } from 'react'

import styles from './FilterLabel.module.scss'

export const FilterLabel: FC<PropsWithChildren<{ label: string }>> = ({
	label,
	children,
}) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.label}>{label}</span>
			{children}
		</div>
	)
}
