import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import closeSide from '@/shared/assets/icons/sidebar/close.svg'
import openSide from '@/shared/assets/icons/sidebar/open.svg'
import Icon from '@/shared/ui/icon/Icon'

import styles from './HomeSidebar.module.scss'
import Navigation from './navigation/Navigation'
import { sidebarClose, sidebarOpen } from './sidebar.animation'

export const HomeSidebar: FC = () => {
	const [open, setOpen] = useState<boolean>(true)

	return (
		<motion.aside
			className={styles.wrapper}
			variants={open ? sidebarOpen : sidebarClose}
			initial='initial'
			animate='animate'
			exit='initial'
		>
			<Navigation state={open} />
			<button onClick={() => setOpen(prev => !prev)} className={styles.open}>
				<Icon src={open ? openSide : closeSide} />
			</button>
		</motion.aside>
	)
}
