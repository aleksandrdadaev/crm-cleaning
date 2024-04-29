import { FC } from 'react'

import { Table } from '@/features/table'

import { ITableProps } from '@/shared/model/types/table.type'

export const SolutionsTable: FC<ITableProps> = ({
	isClearPagination,
	isShowMore,
	table,
}) => {
	return (
		<section>
			<Table
				isClearPagination={isClearPagination}
				isShowMore={isShowMore}
				table={table}
			/>
		</section>
	)
}
