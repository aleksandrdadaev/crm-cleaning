import { SortingOptions } from '@/shared/model/types/sorting.type'

export const useSortTableColumn = (
	params: URLSearchParams,
	replaceUrl: () => void,
	sortString: string
) => {
	const sort = params.get('sort')
	const order = params.get('order')

	const toggleSort = () => {
		if (sort !== sortString) {
			params.set('sort', sortString)
			params.set('order', SortingOptions.asc)
		} else {
			if (order === SortingOptions.asc) params.set('order', SortingOptions.desc)
			else if (order === SortingOptions.desc) {
				params.delete('sort')
				params.delete('order')
			}
		}
		replaceUrl()
	}

	return {
		sort,
		order,
		toggleSort,
	}
}
