import clsx from 'clsx'
import { FC } from 'react'

import ascIcon from '@/shared/assets/icons/sort/asc.svg'
import descIcon from '@/shared/assets/icons/sort/desc.svg'
import { useQueryParams } from '@/shared/lib/hooks/useQueryParams'
import { SortingOptions } from '@/shared/model/types/sorting.type'
import Icon from '@/shared/ui/icon/Icon'

import { useSortTableColumn } from '../lib/hooks/useSortTableColumn'

import styles from './SortTableColumn.module.scss'

export const SortTableColumn: FC<{ sortString: string }> = ({ sortString }) => {
	const { params, replaceUrl } = useQueryParams()
	const { order, sort, toggleSort } = useSortTableColumn(
		params,
		replaceUrl,
		sortString
	)

	return (
		<button onClick={toggleSort}>
			<Icon
				src={
					sort !== sortString
						? ascIcon
						: order === SortingOptions.desc
							? descIcon
							: ascIcon
				}
				classes={clsx(styles.icon, {
					[styles.active]: sort === sortString,
				})}
			/>
		</button>
	)
}
