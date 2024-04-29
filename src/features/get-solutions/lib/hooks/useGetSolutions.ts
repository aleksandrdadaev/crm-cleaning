import { useQuery } from '@tanstack/react-query'

import { SolutionService } from '@/shared/api/services/solution.service'
import { IQueryParamObject } from '@/shared/model/types/query-params.types'

export const useGetSolutions = (queryObjects: IQueryParamObject[]) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: [
			'get solutions',
			...queryObjects.map(object => `${object.key}=${object.value}`),
		],
		queryFn: () => SolutionService.get(queryObjects),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
