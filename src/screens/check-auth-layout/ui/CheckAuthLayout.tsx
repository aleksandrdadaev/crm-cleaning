'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { useCheckAuth } from '@/features/check-auth'

import { getToken } from '@/shared/lib/utils/cookies.util'

export const CheckAuthLayout: FC<PropsWithChildren> = ({ children }) => {
	const { mutate } = useCheckAuth()
	const [isShow, setIsShow] = useState<boolean>(false)
	useEffect(() => {
		if (getToken())
			mutate(
				{},
				{
					onSettled: () => setIsShow(true),
				}
			)
		else setIsShow(true)
	}, [])
	return isShow ? <>{children}</> : <>Загрузка...</>
}
