'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useRegister } from '@/features/register'

import { isDevelop } from '@/shared/config/constants.config'
import { getErrorMessage, isError } from '@/shared/lib/utils/error.util'
import { IRegisterForm } from '@/shared/model/types/auth.type'
import Button from '@/shared/ui/button/Button'

import styles from './RegisterForm.module.scss'
import Fields from './fields/Fields'

export const RegisterForm: FC = () => {
	const { mutate, isLoading } = useRegister()
	const {
		register,
		handleSubmit,
		getValues,
		control,
		setError,
		reset,
		resetField,
		formState: { errors },
	} = useForm<IRegisterForm>({
		mode: 'onSubmit',
		disabled: isLoading,
	})

	const onSubmit: SubmitHandler<IRegisterForm> = data => {
		mutate(data, {
			onError: error => {
				isError(error, 8) &&
					setError('phone', {
						type: '400',
						message: getErrorMessage(error),
					})
				resetField('password', { defaultValue: '' })
				resetField('repeatPassword', { defaultValue: '' })
			},
			onSuccess: () =>
				reset({ name: '', password: '', phone: '', repeatPassword: '' }),
		})
		if (isDevelop) console.table(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Fields
				control={control}
				errors={errors}
				register={register}
				getValues={getValues}
			/>
			<Button type='submit' className={styles.submit} isLoading={isLoading}>
				Зарегистрироваться
			</Button>
		</form>
	)
}
