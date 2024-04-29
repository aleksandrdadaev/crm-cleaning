import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import styles from './Icon.module.scss'

interface IIcon {
	src: string
	classes?: string
	purple?: boolean
}

const Icon: FC<IIcon> = ({ src, classes, purple }) => {
	return (
		<div
			className={clsx(classes, styles.img, {
				[styles.purple]: purple,
			})}
		>
			<Image src={src} alt='' fill />
		</div>
	)
}

export default Icon
