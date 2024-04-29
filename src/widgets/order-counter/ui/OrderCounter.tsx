import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { ModalList } from '@/entities/modal-list'

import arrowDown from '@/shared/assets/icons/arrows/arrow-down.svg'
import arrowUp from '@/shared/assets/icons/arrows/arrow-up.svg'
import loader from '@/shared/assets/loaders/button-loader.svg'
import Icon from '@/shared/ui/icon/Icon'

import { periodsButtons } from '../config/periods-buttons.config'
import { useOrderCounter } from '../lib/hooks/useOrderCounter'

import styles from './OrderCounter.module.scss'
import ButtonPeriod from './button-period/ButtonPeriod'

export const OrderCounter: FC = () => {
	const {
		setOpen,
		open,
		firstCount,
		secondCount,
		period,
		setPeriod,
		firstIsLoading,
		secondIsLoading,
		firstIsSuccess,
		secondIsSuccess,
	} = useOrderCounter()

	return (
		<div className={styles.wrapper}>
			<div
				className={clsx(styles.counter, {
					[styles.isLoading]: firstIsLoading || secondIsLoading,
				})}
			>
				{(firstIsLoading || secondIsLoading) && (
					<Image src={loader} alt='' width={44} height={44} />
				)}
				{firstIsSuccess && <span>{firstCount}</span>}
				{!(firstIsLoading || secondIsLoading) && <span>/</span>}
				{secondIsSuccess && <span>{secondCount}</span>}
			</div>
			<button
				className={styles.openButton}
				onClick={() => setOpen(prev => !prev)}
			>
				<Icon src={open ? arrowUp : arrowDown} />
			</button>
			<AnimatePresence>
				{open && (
					<ModalList callback={() => setOpen(false)} contains>
						{periodsButtons.map(button => (
							<ButtonPeriod
								key={button.text}
								text={button.text}
								clickHandler={() => setPeriod(button.period)}
								isActive={button.period === period}
								disabled={firstIsLoading || secondIsLoading}
							/>
						))}
					</ModalList>
				)}
			</AnimatePresence>
		</div>
	)
}
