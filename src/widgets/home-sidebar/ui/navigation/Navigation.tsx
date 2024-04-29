import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { sidebarNavigationLinks } from '@/shared/config/nav.config'

import NavLink from '../nav-link/NavLink'

import styles from './Navigation.module.scss'

const Navigation: FC<{ state: boolean }> = ({ state }) => {
	const pathname = usePathname()
	return (
		<nav className={styles.wrapper}>
			{sidebarNavigationLinks.map(navLink => (
				<NavLink
					navLink={{
						...navLink,
						isActive: pathname === navLink.path,
					}}
					state={state}
					key={navLink.path}
				/>
			))}
		</nav>
	)
}

export default Navigation
