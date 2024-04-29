import { useQuery } from '@tanstack/react-query'

import { SolutionService } from '@/shared/api/services/solution.service'

export const useGetAllSolutions = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all solutions'],
		queryFn: () => SolutionService.getAll(),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
