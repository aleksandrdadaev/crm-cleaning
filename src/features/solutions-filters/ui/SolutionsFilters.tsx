'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LoadingContext } from '@/shared/lib/utils/context.util'
import Button from '@/shared/ui/button/Button'

import { ISolutionFilters } from '../model/types/solutions-filters.type'

import styles from './SolutionsFilters.module.scss'
import Fields from './fields/Fields'

export const SolutionsFilters: FC = () => {
	const isLoading = useContext(LoadingContext)
	const {
		register,
		handleSubmit,
		getValues,
		control,
		setError,
		reset,
		resetField,
		formState: { errors },
	} = useForm<ISolutionFilters>({
		mode: 'all',
		disabled: isLoading,
	})

	const onSubmit: SubmitHandler<ISolutionFilters> = data => {
		console.table(data)
	}
	return (
		<div className={styles.wrapper}>
			<div className='T4'>
				<button>сбросить</button>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Fields
					errors={errors}
					register={register}
					control={control}
					getValues={getValues}
				/>
				<div>
					<Button type='submit' isLoading={isLoading}>
						Применить
					</Button>
				</div>
			</form>
		</div>
	)
}
