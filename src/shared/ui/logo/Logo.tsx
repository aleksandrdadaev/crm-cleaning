import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Logo.module.scss'
import { cVariants, leaningVariants, logoVariants } from './logo.animation'

const Logo: FC<{ href?: string }> = ({ href = '/home' }) => {
	const MotionLink = motion(Link)
	return (
		<MotionLink
			href={href}
			variants={logoVariants}
			initial='hidden'
			animate='show'
			whileHover='hover'
			className={styles.logo}
		>
			<span className={styles.crm}>CRM</span>
			<motion.span className={styles.c} variants={cVariants}>
				C
			</motion.span>
			<motion.span variants={leaningVariants} className={styles.leaning}>
				leaning
			</motion.span>
		</MotionLink>
	)
}

export default Logo
