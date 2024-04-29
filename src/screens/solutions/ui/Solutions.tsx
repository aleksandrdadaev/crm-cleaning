'use client'

import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { FC, useMemo, useState } from 'react'

import { SolutionsHeader } from '@/widgets/solutions-header'
import { SolutionsTable } from '@/widgets/solutions-table'

import { useGetSolutions } from '@/features/get-solutions'
import { usePagination } from '@/features/pagination'
import { useClearPagination } from '@/features/pagination/lib/hooks/useClearPagination'
import { useSortTable } from '@/features/sort-table'

import { LoadingContext } from '@/shared/lib/utils/context.util'
import { createQueryObject } from '@/shared/lib/utils/query-params.util'
import { ISolution } from '@/shared/model/types/solution.type'

import { columns } from '../config/columns.config'

import styles from './Solutions.module.scss'

export const Solutions: FC = () => {
	const [pageSize, setPageSize] = useState<number>(20)
	const [pageNumber, setPageNumber] = useState<number>(1)

	const { order, sort } = useSortTable()

	const {
		isLoading,
		isSuccess,
		count,
		solutions = [],
	} = useGetSolutions([
		createQueryObject({ sort }),
		createQueryObject({ order }),
		createQueryObject({ pageSize }),
		createQueryObject({ pageNumber }),
	])
	const { list, showMore } = usePagination<ISolution>({
		isSuccess,
		pageNumber,
		pageSize,
		elements: solutions,
		count,
		setPageNumber,
	})

	const { isClearPagination } = useClearPagination([sort, order])

	const table = useReactTable({
		columns: useMemo(() => columns, []),
		data: list,
		getCoreRowModel: getCoreRowModel(),
		columnResizeMode: 'onChange',
	})
	return (
		<main className={styles.wrapper}>
			<LoadingContext.Provider value={isLoading}>
				<SolutionsHeader table={table} />
				<SolutionsTable
					isClearPagination={isClearPagination}
					isShowMore={showMore}
					table={table}
				/>
			</LoadingContext.Provider>
		</main>
	)
}
