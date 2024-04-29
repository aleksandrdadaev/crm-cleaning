import { AnimatePresence } from 'framer-motion'
import { FC, PropsWithChildren, useState } from 'react'

import { FiltersScroll } from '@/entities/filters-scroll'
import { ModalList } from '@/entities/modal-list'
import { TableFilterButton } from '@/entities/table-filter-button'

import filterIcon from '@/shared/assets/icons/filter.svg'

import styles from './OpenTableFilters.module.scss'

export const OpenTableFilters: FC<PropsWithChildren> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className={styles.wrapper}>
			<TableFilterButton
				iconPath={filterIcon}
				open={open}
				onClick={() => setOpen(prev => !prev)}
			/>
			<AnimatePresence>
				{open && (
					<ModalList
						callback={() => setOpen(false)}
						contains
						classes={styles.modal}
						left
					>
						<FiltersScroll>{children}</FiltersScroll>
					</ModalList>
				)}
			</AnimatePresence>
		</div>
	)
}
