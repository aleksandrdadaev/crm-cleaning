import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/shared/api/services/user.service'

export const useGetMe = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get me'],
		queryFn: () => UserService.getMe(),
		select: data => data.data.data,
	})

	return {
		me: data,
		isLoading,
		isSuccess,
		isError,
	}
}
