import { FC } from 'react'

import Logo from '@/shared/ui/logo/Logo'

import styles from './AuthHeader.module.scss'

export const AuthHeader: FC = () => {
	return (
		<header>
			<Logo href='/' />
		</header>
	)
}
