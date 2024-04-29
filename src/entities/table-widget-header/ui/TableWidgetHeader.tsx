import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

import styles from './TableWidgetHeader.module.scss'

export const TableWidgetHeader: FC<PropsWithChildren> = ({ children }) => {
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
