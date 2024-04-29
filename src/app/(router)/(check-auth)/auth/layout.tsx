import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

import { AuthLayout } from '@/screens/auth-layout'

import { isDevelop } from '@/shared/config/constants.config'

export const metadata: Metadata = {
	title: 'Авторизация',
}

const layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<AuthLayout>
			{children}
			{isDevelop && <ReactQueryDevtools initialIsOpen={false} />}
		</AuthLayout>
	)
}

export default layout
