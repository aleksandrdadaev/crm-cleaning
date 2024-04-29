import { ColumnDef } from '@tanstack/react-table'
import { ReactNode } from 'react'

import { CommentInTable } from '@/features/comment-in-table'
import { SortTableColumn } from '@/features/sort-table-column'

import { DifficultyBlock } from '@/entities/difficulty'
import { NullableEntity } from '@/entities/nullable-entity'

import { getPrice } from '@/shared/lib/utils/price.util'
import { getColumnSizes } from '@/shared/lib/utils/table-columns.util'
import { ISolution } from '@/shared/model/types/solution.type'

export const columns: ColumnDef<ISolution>[] = [
	{
		accessorKey: 'name',
		header: () => <span>Услуга</span>,
		cell: props => (
			<NullableEntity value={props.getValue()}>
				<span>{props.getValue() as ReactNode}</span>
			</NullableEntity>
		),
		...getColumnSizes({}),
		enableHiding: false,
	},
	{
		accessorKey: 'price',
		header: () => (
			<>
				<span>Цена</span>
				<SortTableColumn sortString={'price'} />
			</>
		),
		cell: props => (
			<NullableEntity value={props.getValue()}>
				<span>{getPrice(props.getValue())}</span>
			</NullableEntity>
		),
		...getColumnSizes({ size: 100, minSize: 80 }),
	},
	{
		accessorKey: 'costPrice',
		header: () => (
			<>
				<span>Себестоимость</span>
				<SortTableColumn sortString={'costPrice'} />
			</>
		),
		cell: props => (
			<NullableEntity value={props.getValue()}>
				<span>{getPrice(props.getValue())}</span>
			</NullableEntity>
		),
		...getColumnSizes({ minSize: 80 }),
	},

	{
		accessorKey: 'difficulty',
		header: () => (
			<>
				<span>Сложность</span>
				<SortTableColumn sortString={'difficulty'} />
			</>
		),
		cell: props => (
			<NullableEntity value={props.getValue()}>
				<DifficultyBlock number={props.getValue()} />
			</NullableEntity>
		),
		...getColumnSizes({ minSize: 50 }),
	},
	{
		accessorKey: 'comment',
		header: () => <span>Комментарий</span>,
		cell: props => (
			<NullableEntity value={props.getValue()}>
				<CommentInTable comment={props.getValue()} />
			</NullableEntity>
		),
		...getColumnSizes({ size: 250 }),
	},
]
