import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'

import { ModalList } from '@/entities/modal-list'
import { TableFilterButton } from '@/entities/table-filter-button'

import columnsIcon from '@/shared/assets/icons/columns.svg'
import Checkbox from '@/shared/ui/form-elements/checkbox/Checkbox'
import Icon from '@/shared/ui/icon/Icon'

import { IDisableTableColumns } from '../model/types/disable-table-columns.type'

import styles from './DisableTableColumns.module.scss'

export const DisableTableColumns: FC<IDisableTableColumns> = ({
	table,
	switchFn,
}) => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className={styles.wrapper}>
			<TableFilterButton
				open={open}
				iconPath={columnsIcon}
				onClick={() => setOpen(prev => !prev)}
			/>
			<AnimatePresence>
				{open && (
					<ModalList
						callback={() => setOpen(false)}
						contains
						classes={styles.list}
						left
					>
						{table.getAllColumns().map(column => (
							<Checkbox
								checked={column.getIsVisible()}
								disabled={!column.getCanHide()}
								onChange={column.getToggleVisibilityHandler()}
								label={switchFn(column.id)}
							/>
						))}
					</ModalList>
				)}
			</AnimatePresence>
		</div>
	)
}
