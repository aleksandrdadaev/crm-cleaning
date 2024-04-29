import { AxiosResponse } from 'axios'

import { getAuthUrl } from '@/shared/config/api.config'
import {
	IAuthResponse,
	IConfirmAuthForm,
	IRegisterForm,
	ISignInForm,
	ISignResponse,
} from '@/shared/model/types/auth.type'

import { $apiRefresh, $apiWithoutAuth } from '../instance-axios.api'

export const AuthService = {
	async signup(
		request: Omit<IRegisterForm, 'repeatPassword'>
	): Promise<AxiosResponse<ISignResponse>> {
		return $apiWithoutAuth.post<ISignResponse>(getAuthUrl('/signup'), request)
	},
	async signin(request: ISignInForm): Promise<AxiosResponse<ISignResponse>> {
		return $apiWithoutAuth.post<ISignResponse>(getAuthUrl('/signin'), request)
	},
	async refresh(): Promise<AxiosResponse<IAuthResponse>> {
		return $apiRefresh.post<IAuthResponse>(getAuthUrl('/refresh'))
	},
	async sendCode(
		url: string,
		request: IConfirmAuthForm
	): Promise<AxiosResponse<IAuthResponse>> {
		return $apiWithoutAuth.post<IAuthResponse>(
			getAuthUrl(`/confirm/${url}`),
			request
		)
	},
	async resendCode(url: string): Promise<AxiosResponse<ISignResponse>> {
		return $apiWithoutAuth.post<ISignResponse>(
			getAuthUrl(`/confirm/resend/${url}`)
		)
	},
}
