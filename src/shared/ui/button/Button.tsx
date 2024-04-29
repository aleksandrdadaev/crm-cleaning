import clsx from 'clsx'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import loader from '@/shared/assets/loaders/button-loader.svg'
import { IButton } from '@/shared/model/types/form.type'

import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	isLoading,
	...rest
}) => {
	return (
		<button
			className={clsx(className, styles.buttonEl, {
				[styles.buttonLoading]: isLoading,
			})}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? (
				<Image
					src={loader}
					alt=''
					width={46}
					height={46}
					className={styles.loader}
				/>
			) : (
				children
			)}
		</button>
	)
}

export default Button
