import { AxiosResponse } from 'axios'

import { getUserUrl } from '@/shared/config/api.config'
import { IUserResponse } from '@/shared/model/types/user.type'

import { $api } from '../instance-axios.api'

export const UserService = {
	async getMe(): Promise<AxiosResponse<IUserResponse>> {
		return $api.get<IUserResponse>(getUserUrl(`/getMe`))
	},
}
