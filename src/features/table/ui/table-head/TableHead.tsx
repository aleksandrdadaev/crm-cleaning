import { flexRender } from '@tanstack/react-table'
import clsx from 'clsx'
import { FC } from 'react'

import { ITable } from '@/shared/model/types/table.type'

import styles from './TableHead.module.scss'

const TableHead: FC<ITable<any>> = ({ table }) => {
	return (
		<thead className={styles.wrapper}>
			{table.getHeaderGroups().map(headerGroup => (
				<tr key={headerGroup.id} className={styles.row}>
					{headerGroup.headers.map(header => (
						<th
							key={header.id}
							style={{
								width: header.getSize(),
							}}
							className={clsx(styles.header, {
								[styles.isResizing]: header.column.getIsResizing(),
							})}
						>
							{flexRender(header.column.columnDef.header, header.getContext())}
							<div
								className={styles.resize}
								onMouseDown={header.getResizeHandler()}
								onTouchStart={header.getResizeHandler()}
							>
								<span
									className={clsx(styles.resizer, {
										[styles.isResizing]: header.column.getIsResizing(),
									})}
								/>
							</div>
						</th>
					))}
				</tr>
			))}
		</thead>
	)
}

export default TableHead
