import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'

import { IModalList } from '../model/types/modal-list.type'

import styles from './ModalList.module.scss'
import { listVariants } from './modal-list.animation'

export const ModalList: FC<PropsWithChildren<IModalList>> = ({
	children,
	left,
	classes,
	callback,
	contains,
}) => {
	const ref = useClickOutside({
		callback,
		contains,
	})

	return (
		<motion.div
			ref={ref}
			className={clsx(styles.wrapper, classes, {
				[styles.left]: left,
			})}
			variants={listVariants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{children}
		</motion.div>
	)
}
