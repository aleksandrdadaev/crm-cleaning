import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

import { HomeLayout } from '@/screens/home-layout'

import { isDevelop } from '@/shared/config/constants.config'

export const metadata: Metadata = {
	title: 'Главная',
}

const layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HomeLayout>
			{children}
			{isDevelop && <ReactQueryDevtools initialIsOpen={false} />}
		</HomeLayout>
	)
}

export default layout
