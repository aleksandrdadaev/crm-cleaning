import { Dispatch, SetStateAction } from 'react'

export interface IPaginationProps<T> {
	elements: T[] | undefined
	isSuccess: boolean
	count: number | undefined
	pageSize: number
	pageNumber: number
	setPageNumber: Dispatch<SetStateAction<number>>
}
