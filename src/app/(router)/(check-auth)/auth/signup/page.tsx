import { Metadata } from 'next'
import { FC } from 'react'

import { SignUp } from '@/screens/signup'

export const metadata: Metadata = {
	title: 'Регистрация',
}

const page: FC = () => {
	return <SignUp />
}

export default page
