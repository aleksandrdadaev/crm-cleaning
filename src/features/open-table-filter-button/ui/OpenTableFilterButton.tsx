'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { FC, PropsWithChildren, useState } from 'react'

import { ModalList } from '@/entities/modal-list'

import Icon from '@/shared/ui/icon/Icon'

import { IOpenButton } from '../model/types/open-button.type'

import styles from './OpenTableFilterButton.module.scss'

export const OpenTableFilterButton: FC<PropsWithChildren<IOpenButton>> = ({
	children,
	iconPath,
	dopModalClass,
}) => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className='relative'>
			<button
				className={clsx(styles.button, {
					[styles.active]: open,
				})}
				onClick={() => setOpen(prev => !prev)}
			>
				<Icon src={iconPath} classes={styles.icon} />
			</button>
			<AnimatePresence>
				{open && (
					<ModalList
						callback={() => setOpen(false)}
						contains
						classes={dopModalClass ? dopModalClass : undefined}
						left
					>
						{children}
					</ModalList>
				)}
			</AnimatePresence>
		</div>
	)
}
