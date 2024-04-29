import { flexRender } from '@tanstack/react-table'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useContext } from 'react'

import dopIcon from '@/shared/assets/icons/dot-vertical.svg'
import loader from '@/shared/assets/loaders/button-loader-purple.svg'
import { useQueryParams } from '@/shared/lib/hooks/useQueryParams'
import { LoadingContext } from '@/shared/lib/utils/context.util'
import { ITable } from '@/shared/model/types/table.type'
import Icon from '@/shared/ui/icon/Icon'

import styles from './TableBody.module.scss'

const TableBody: FC<ITable<any>> = ({ table }) => {
	const pathname = usePathname()
	const { params } = useQueryParams()
	const isLoading = useContext(LoadingContext)
	return (
		<tbody className={styles.wrapper}>
			{table.getRowModel().rows.map(row => (
				<tr key={row.id} className={styles.rowWrapper}>
					<Link href={`${pathname}/${row.original.id}`} className={styles.open}>
						<Icon src={dopIcon} />
					</Link>
					<div key={row.id} className={styles.row}>
						{row.getVisibleCells().map(cell => (
							<td
								key={cell.id}
								style={{ width: cell.column.getSize() }}
								className={styles.cell}
							>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</div>
				</tr>
			))}
			{isLoading && params.has('p') && (
				<div className={styles.loading}>
					<Icon src={loader} classes={styles.loaderIcon} />
				</div>
			)}
		</tbody>
	)
}
export default TableBody
