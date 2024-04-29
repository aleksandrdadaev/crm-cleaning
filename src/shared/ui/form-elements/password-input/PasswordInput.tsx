import clsx from 'clsx'
import { motion } from 'framer-motion'
import { LegacyRef, forwardRef, useState } from 'react'

import { toggleButton } from '@/shared/lib/utils/password-input.util'
import { IInput } from '@/shared/model/types/form.type'

import styles from '../Input.module.scss'
import { errorVariants } from '../input.animation'

import styles2 from './PasswordInput.module.scss'
import Button from './button/Button'
import { IType } from './password-input.type'

const PasswordInput = forwardRef<HTMLInputElement, IInput>(
	(
		{ error, onChange, ...rest },
		forwardRef: LegacyRef<HTMLInputElement> | undefined
	) => {
		const [type, setType] = useState<IType>('password')
		const [isButton, setIsButton] = useState<boolean>(false)
		return (
			<label className={styles.label}>
				<div
					className={clsx(styles.input, styles2.inputWrapper, {
						[styles.errorInput]: error,
					})}
				>
					<input
						ref={forwardRef}
						type={type}
						onChange={e => {
							onChange && onChange(e)
							toggleButton({ e, isButton, setIsButton })
						}}
						{...rest}
					/>
					{isButton && <Button type={type} setType={setType} />}
				</div>
				{error && (
					<motion.span
						className={styles.error}
						variants={errorVariants}
						initial='hidden'
						animate='show'
					>
						{error.message}
					</motion.span>
				)}
			</label>
		)
	}
)

export default PasswordInput
