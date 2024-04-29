import { AnimatePresence } from 'framer-motion'
import { FC, ReactNode, useState } from 'react'

import { ModalList } from '@/entities/modal-list'

import arrowDown from '@/shared/assets/icons/arrows/arrow-down-purple.svg'
import arrowUp from '@/shared/assets/icons/arrows/arrow-up-purple.svg'
import Icon from '@/shared/ui/icon/Icon'

import styles from './CommentInTable.module.scss'

export const CommentInTable: FC<{ comment: string | unknown }> = ({
	comment,
}) => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className={styles.wrapper}>
			<p>{comment as ReactNode}</p>
			<button onClick={() => setOpen(prev => !prev)}>
				<Icon src={open ? arrowUp : arrowDown} />
			</button>
			<AnimatePresence>
				{open && (
					<ModalList callback={() => setOpen(false)} contains>
						<p className={styles.comment}>{comment as ReactNode}</p>
					</ModalList>
				)}
			</AnimatePresence>
		</div>
	)
}
