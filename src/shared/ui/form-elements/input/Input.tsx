import clsx from 'clsx'
import { motion } from 'framer-motion'
import { LegacyRef, forwardRef } from 'react'

import { IInput } from '@/shared/model/types/form.type'

import styles from '../Input.module.scss'
import { errorVariants } from '../input.animation'

const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{ error, type = 'text', gray, ...rest },
		forwardRef: LegacyRef<HTMLInputElement> | undefined
	) => {
		return (
			<label className={styles.label}>
				<input
					ref={forwardRef}
					type={type}
					{...rest}
					className={clsx(styles.input, {
						[styles.errorInput]: error,
						[styles.gray]: gray,
					})}
				/>
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

export default Input
