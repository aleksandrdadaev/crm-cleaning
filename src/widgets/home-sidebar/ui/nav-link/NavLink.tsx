import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import { INavLink } from '@/shared/model/types/link.type'
import Icon from '@/shared/ui/icon/Icon'

import styles from './NavLink.module.scss'
import { navLinkVariants } from './nav-link.animation'

const NavLink: FC<{ navLink: INavLink; state: boolean }> = ({
	navLink: { icon, path, text, isActive },
	state,
}) => {
	return (
		<Link
			href={path}
			className={clsx(styles.wrapper, {
				[styles.active]: isActive,
			})}
		>
			<Icon src={icon} />
			<AnimatePresence>
				{state && (
					<motion.span className={styles.text} variants={navLinkVariants}>
						{text}
					</motion.span>
				)}
			</AnimatePresence>
		</Link>
	)
}

export default NavLink
