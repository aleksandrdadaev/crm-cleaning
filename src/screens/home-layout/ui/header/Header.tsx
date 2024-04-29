import { FC } from 'react'

import { HeaderProfile } from '@/widgets/header-profile'
import { HeaderSearch } from '@/widgets/header-search'
import { OrderCounter } from '@/widgets/order-counter'

import Logo from '@/shared/ui/logo/Logo'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.wrapper}>
			<Logo />
			<HeaderSearch />
			<OrderCounter />
			<HeaderProfile />
		</header>
	)
}

export default Header
