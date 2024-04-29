import { InputMask } from '@react-input/mask'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Ref, forwardRef } from 'react'

import { IMaskedInput } from '@/shared/model/types/form.type'

import styles from '../Input.module.scss'
import { errorVariants } from '../input.animation'

const MaskedInput = forwardRef<HTMLInputElement, IMaskedInput>(
	(
		{ error, mask, replacement, placeholder, showMask = true, ...rest },
		forwardRef: Ref<HTMLInputElement> | undefined
	) => {
		return (
			<label className={styles.label}>
				<InputMask
					mask={mask}
					showMask={showMask}
					replacement={replacement}
					ref={forwardRef}
					placeholder={placeholder}
					className={clsx(styles.input, {
						[styles.errorInput]: error,
					})}
					{...rest}
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

export default MaskedInput
