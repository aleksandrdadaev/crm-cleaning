import clsx from 'clsx'
import { FC } from 'react'

import { IButtonPeriod } from '../../model/types/period.type'

import styles from './ButtonPeriod.module.scss'

const ButtonPeriod: FC<IButtonPeriod> = ({
	clickHandler,
	text,
	isActive,
	disabled,
}) => {
	return (
		<button
			onClick={clickHandler}
			className={clsx(styles.button, {
				[styles.isActive]: isActive,
			})}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default ButtonPeriod
