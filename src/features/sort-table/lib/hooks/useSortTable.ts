import { useEffect, useState } from 'react'

import { useQueryParams } from '@/shared/lib/hooks/useQueryParams'
import { SortingOptions } from '@/shared/model/types/sorting.type'

import { setSortingOrder } from '../utils/set-sorting-order.util'

export const useSortTable = () => {
	const [sort, setSort] = useState<string | null>(null)
	const [order, setOrder] = useState<SortingOptions>(SortingOptions.off)

	const { params } = useQueryParams()

	useEffect(() => {
		if (params.has('sort')) setSort(params.get('sort'))
		else setSort(null)
		setSortingOrder(params, setOrder)
	}, [params])

	return {
		sort,
		order,
	}
}
