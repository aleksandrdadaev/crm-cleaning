import { FC } from 'react'

import { ITableProps } from '@/shared/model/types/table.type'

import styles from './Table.module.scss'
import TableBody from './table-body/TableBody'
import TableHead from './table-head/TableHead'
import TableScroll from './table-scroll/TableScroll'

export const Table: FC<ITableProps> = ({
	isClearPagination,
	isShowMore,
	table,
}) => {
	return (
		<TableScroll isClearPagination={isClearPagination} isShowMore={isShowMore}>
			<table
				className={styles.table}
				style={{
					width:
						table.getTotalSize() + 80 + (table.getAllColumns().length - 1) * 30,
				}}
			>
				<TableHead table={table} />
				<TableBody table={table} />
			</table>
		</TableScroll>
	)
}
