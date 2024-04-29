import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<{ classname?: string }>> = ({
	children,
	classname,
}) => {
	return <h1 className={clsx(styles.heading, classname)}>{children}</h1>
}

export default Heading
