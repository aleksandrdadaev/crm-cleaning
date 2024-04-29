import { AxiosResponse } from 'axios'

import { getSolutionUrl } from '@/shared/config/api.config'
import { createQueryString } from '@/shared/lib/utils/query-params.util'
import { IQueryParamObject } from '@/shared/model/types/query-params.types'
import { ISolutionAllResponse } from '@/shared/model/types/solution.type'

import { $api } from '../instance-axios.api'

export const SolutionService = {
	async getAll(): Promise<AxiosResponse<ISolutionAllResponse>> {
		return $api.get<ISolutionAllResponse>(getSolutionUrl(`/getAll`))
	},
	async get(
		queryObjects: IQueryParamObject[]
	): Promise<AxiosResponse<ISolutionAllResponse>> {
		return $api.get<ISolutionAllResponse>(
			getSolutionUrl(`/get?${createQueryString(queryObjects)}`)
		)
	},
}
