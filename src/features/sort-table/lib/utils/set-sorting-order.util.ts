import { SetStateAction } from 'react'

import { SortingOptions } from '@/shared/model/types/sorting.type'

export const setSortingOrder = (
	params: URLSearchParams,
	setState: (value: SetStateAction<SortingOptions>) => void
) => {
	if (params.has('order')) {
		params.get('order') === SortingOptions.asc && setState(SortingOptions.asc)
		params.get('order') === SortingOptions.desc && setState(SortingOptions.desc)
	} else setState(SortingOptions.off)
}
