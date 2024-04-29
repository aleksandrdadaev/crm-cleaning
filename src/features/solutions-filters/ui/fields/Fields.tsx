import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { FilterLabel } from '@/entities/filter-label'

import { replacePrice } from '@/shared/lib/utils/price.util'
import { IFields } from '@/shared/model/types/form.type'
import Input from '@/shared/ui/form-elements/input/Input'
import PriceInput from '@/shared/ui/form-elements/price-input/PriceInput'

import { ISolutionFilters } from '../../model/types/solutions-filters.type'

import styles from './Fields.module.scss'

const Fields: FC<IFields<ISolutionFilters>> = ({
	errors,
	register,
	control,
	getValues,
}) => {
	return (
		<div>
			<FilterLabel label='Цена'>
				<div className={styles.flexBlock}>
					<Controller
						control={control}
						name='priceFrom'
						render={({ field: { onChange, onBlur, value, disabled } }) => (
							<PriceInput
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								disabled={disabled}
								placeholder='от'
								gray
							/>
						)}
					/>
					<span className='filters-dash' />
					<Controller
						control={control}
						name='priceTo'
						render={({ field: { onChange, onBlur, value, disabled } }) => (
							<PriceInput
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								disabled={disabled}
								placeholder='до'
								gray
							/>
						)}
					/>
				</div>
			</FilterLabel>
		</div>
	)
}

export default Fields
