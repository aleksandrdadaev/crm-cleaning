import { useQuery } from '@tanstack/react-query'

import { OrderService } from '@/shared/api/services/order.service'

export const useGetCountOrders = (dateFrom: string, dateTo: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get count orders', dateFrom, dateTo],
		queryFn: () => OrderService.getCount(dateFrom, dateTo),
		select: data => data.data.data,
	})

	return {
		count: data,
		isLoading,
		isSuccess,
	}
}
