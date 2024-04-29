import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

import { CheckAuthLayout } from '@/screens/check-auth-layout'

export const metadata: Metadata = {
	robots: 'none',
}

const layout: FC<PropsWithChildren> = ({ children }) => {
	return <CheckAuthLayout>{children}</CheckAuthLayout>
}

export default layout
