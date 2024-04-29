import clsx from 'clsx'
import { FC } from 'react'

import { Difficulty, ISolution } from '@/shared/model/types/solution.type'

import styles from './Difficulty.module.scss'

export const DifficultyBlock: FC<{
	number: Pick<ISolution, 'difficulty'> | unknown
}> = ({ number }) => {
	return (
		<div className={styles.wrapper}>
			<span
				className={clsx(styles.span, {
					['!bg-lightGreen']: number === Difficulty.easy,
					['!bg-orange']: number === Difficulty.medium,
					['!bg-coral']: number === Difficulty.hard,
				})}
			/>
			<span
				className={clsx(styles.span, {
					['!bg-orange']: number === Difficulty.medium,
					['!bg-coral']: number === Difficulty.hard,
				})}
			/>
			<span
				className={clsx(styles.span, {
					['!bg-coral']: number === Difficulty.hard,
				})}
			/>
		</div>
	)
}
