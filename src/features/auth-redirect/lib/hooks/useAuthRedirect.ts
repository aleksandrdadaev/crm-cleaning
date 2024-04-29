'use client'

import { redirect } from 'next/navigation'

import { getAuthUrl, getHomeUrl } from '@/shared/config/url.config'
import { useAppSelector } from '@/shared/model/store/store-hooks'

export const useAuthRedirect = (auth?: boolean) => {
	const user = useAppSelector(state => state.user.user)
	if (auth) {
		if (user === null) {
			redirect(getAuthUrl('/signin'))
		} else return
	} else {
		if (user) {
			redirect(getHomeUrl(''))
		}
	}
}
