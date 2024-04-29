'use client'

import { userActions } from '@/shared/model/store/slices/user.slice'
import { AppDispatch } from '@/shared/model/store/store'
import { IAuthResponse } from '@/shared/model/types/auth.type'

import { removeToken, setToken } from './cookies.util'

export const setAuth = (
	{ data: { accessToken, user } }: IAuthResponse,
	dispatch: AppDispatch
) => {
	dispatch(userActions.login(user))
	setToken(accessToken)
}

export const clearAuth = (dispatch: AppDispatch) => {
	dispatch(userActions.logout())
	removeToken()
}
