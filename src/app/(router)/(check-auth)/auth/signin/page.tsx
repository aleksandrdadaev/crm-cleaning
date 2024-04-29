import { Metadata } from 'next'
import { FC } from 'react'

import { SignIn } from '@/screens/signin'

export const metadata: Metadata = {
	title: 'Авторизация',
}

const page: FC = () => {
	return <SignIn />
}

export default page
