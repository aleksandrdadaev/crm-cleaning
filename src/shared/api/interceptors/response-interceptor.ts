'use client'

import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { getAuthUrl } from '@/shared/config/api.config'
import { removeToken, setToken } from '@/shared/lib/utils/cookies.util'
import { userActions } from '@/shared/model/store/slices/user.slice'
import { IAuthResponse } from '@/shared/model/types/auth.type'

import { $api, $apiRefresh } from '../instance-axios.api'

export const setResponseInterceptor = (
	dispatch: ThunkDispatch<
		{
			user: null
		},
		undefined,
		UnknownAction
	> &
		Dispatch<UnknownAction>
) => {
	$api.interceptors.response.use(
		config => config,
		async error => {
			const originalRequest = error.config
			if (
				error.response?.status === 401 &&
				error.config &&
				!error.config._isRetry
			) {
				originalRequest._isRetry = true
				try {
					const {
						data: {
							data: { accessToken, user },
						},
					} = await $apiRefresh.post<IAuthResponse>(getAuthUrl('/refresh'))
					setToken(accessToken)
					dispatch(userActions.login(user))
					return $api.request(originalRequest)
				} catch (e) {
					removeToken()
					dispatch(userActions.logout())
				}
			}
			throw error
		}
	)
}
