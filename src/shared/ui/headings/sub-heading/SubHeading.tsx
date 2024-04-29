import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './SubHeading.module.scss'

const SubHeading: FC<PropsWithChildren<{ classname?: string }>> = ({
	children,
	classname,
}) => {
	return <h2 className={clsx(styles.heading, classname)}>{children}</h2>
}

export default SubHeading
