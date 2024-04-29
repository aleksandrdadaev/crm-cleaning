'use client'

import { FC } from 'react'

import { useAppSelector } from '@/shared/model/store/store-hooks'

export const Home: FC = () => {
	const user = useAppSelector(state => state.user.user)

	return (
		<main>
			<div>{user?.name || 'Не авторизован'}</div>
		</main>
	)
}
