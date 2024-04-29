'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

import styles from './EntityPageHeader.module.scss'

export const EntityPageHeader: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname()
	return (
		<div className={styles.wrapper}>
			<Link href={`${pathname}/create`} className={styles.create}>
				Добавить
			</Link>
			<div className={styles.right}>{children}</div>
		</div>
	)
}
