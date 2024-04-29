import { Table } from '@tanstack/react-table'

import { IId } from './global.type'

export interface ITable<T extends IId> {
	table: Table<T>
}

export interface ITableProps extends ITable<any> {
	isShowMore: boolean
	isClearPagination: boolean
}
