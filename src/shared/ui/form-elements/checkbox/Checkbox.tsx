import { FC, LegacyRef, forwardRef } from 'react'

import checkIcon from '@/shared/assets/icons/check.svg'
import { ICheckbox } from '@/shared/model/types/form.type'

import Icon from '../../icon/Icon'

import styles from './Checkbox.module.scss'

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
	(
		{ label, type = 'checkbox', ...rest },
		forwardRef: LegacyRef<HTMLInputElement> | undefined
	) => {
		return (
			<label className={styles.wrapper}>
				<input
					ref={forwardRef}
					type={type}
					{...rest}
					className={styles.input}
				/>
				<div className={styles.checkbox}>
					<Icon src={checkIcon} classes={styles.icon} />
				</div>
				{label && <span className={styles.text}>{label}</span>}
			</label>
		)
	}
)

export default Checkbox
