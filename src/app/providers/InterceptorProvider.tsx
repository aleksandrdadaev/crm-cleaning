'use client'

import { FC, PropsWithChildren, useEffect } from 'react'

import { setResponseInterceptor } from '@/shared/api/interceptors/response-interceptor'
import { useAppDispatch } from '@/shared/model/store/store-hooks'

const InterceptorProvider: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch()
	useEffect(() => setResponseInterceptor(dispatch), [])

	return <>{children}</>
}

export default InterceptorProvider
