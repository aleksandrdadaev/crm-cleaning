import { AxiosResponse } from 'axios'

import { getOrderUrl } from '@/shared/config/api.config'
import { IOrderCountResponse } from '@/shared/model/types/order.type'

import { $api } from '../instance-axios.api'

export const OrderService = {
	async getCount(
		dateFrom: string,
		dateTo: string
	): Promise<AxiosResponse<IOrderCountResponse>> {
		return $api.get<IOrderCountResponse>(
			getOrderUrl(`/get/count?dateFrom=${dateFrom}&dateTo=${dateTo}`)
		)
	},
}
