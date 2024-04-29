import { useEffect, useState } from 'react'

import { useQueryParams } from '@/shared/lib/hooks/useQueryParams'

import { IPaginationProps } from '../../model/types/pagination-props.types'

export const usePagination = <T>({
	isSuccess,
	pageNumber,
	pageSize,
	elements = [],
	count = 0,
	setPageNumber,
}: IPaginationProps<T>) => {
	const [showMore, setShowMore] = useState<boolean>(true)
	const [list, setList] = useState<T[]>([])
	const { params } = useQueryParams()

	useEffect(() => {
		if (isSuccess) {
			pageNumber === 1
				? setList(elements)
				: setList(prev => prev.concat(elements))
			count <= pageNumber * pageSize ? setShowMore(false) : setShowMore(true)
		}
	}, [isSuccess, pageSize, pageNumber, elements])

	useEffect(
		() =>
			params.has('p')
				? setPageNumber(Number(params.get('p')))
				: setPageNumber(1),
		[params]
	)

	return {
		list,
		showMore,
	}
}
