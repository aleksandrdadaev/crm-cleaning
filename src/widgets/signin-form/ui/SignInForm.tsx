'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useSignIn } from '@/features/signin'

import { isDevelop } from '@/shared/config/constants.config'
import { getErrorMessage, isError } from '@/shared/lib/utils/error.util'
import { ISignInForm } from '@/shared/model/types/auth.type'
import Button from '@/shared/ui/button/Button'

import styles from './SignInForm.module.scss'
import Fields from './fields/Fields'

export const SignInForm: FC = () => {
	const { mutate, isLoading } = useSignIn()
	const {
		register,
		handleSubmit,
		getValues,
		control,
		setError,
		reset,
		resetField,

		formState: { errors },
	} = useForm<ISignInForm>({
		mode: 'onSubmit',
		disabled: isLoading,
	})

	const onSubmit: SubmitHandler<ISignInForm> = data => {
		mutate(data, {
			onError: error => {
				if (isError(error, 4)) {
					setError('phone', {
						type: '400',
					})
					setError('password', {
						type: '400',
						message: getErrorMessage(error),
					})
				}
				resetField('password', { keepError: true, defaultValue: '' })
			},
			onSuccess: () => reset({ password: '', phone: '' }),
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
				Войти
			</Button>
		</form>
	)
}
