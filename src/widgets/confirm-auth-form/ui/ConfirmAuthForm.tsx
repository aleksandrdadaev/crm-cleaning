'use client'

import Image from 'next/image'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useSendConfirmCode } from '@/features/send-confirm-code'

import loader from '@/shared/assets/loaders/button-loader-purple.svg'
import { isDevelop } from '@/shared/config/constants.config'
import {
	confirmCodeInputMask,
	confirmCodeInputPlaceholder,
	confirmCodeIsValid,
	replacementConfirmCodeMask,
} from '@/shared/lib/utils/confirm-code-input.util'
import { UrlContext } from '@/shared/lib/utils/context.util'
import { getErrorMessage, isError } from '@/shared/lib/utils/error.util'
import { IConfirmAuthForm } from '@/shared/model/types/auth.type'
import MaskedInput from '@/shared/ui/form-elements/masked-input/MaskedInput'

import styles from './ConfirmAuthForm.module.scss'

export const ConfirmAuthForm: FC = () => {
	const url = useContext(UrlContext)
	const { isLoading, mutate } = useSendConfirmCode(url)
	const {
		register,
		handleSubmit,
		setValue,
		setError,
		reset,
		resetField,
		formState: { errors },
	} = useForm<IConfirmAuthForm>({
		mode: 'all',
		disabled: isLoading,
	})

	const onSubmit: SubmitHandler<IConfirmAuthForm> = data => {
		if (isDevelop) console.table(data)
		mutate(data, {
			onError: error => {
				isError(error, 27) &&
					setError('code', {
						type: '400',
						message: getErrorMessage(error),
					})
				resetField('code', { keepError: true })
			},
			onSuccess: () => reset(),
		})
	}
	return (
		<form className={styles.form}>
			<MaskedInput
				{...register('code')}
				mask={confirmCodeInputMask}
				placeholder={confirmCodeInputPlaceholder}
				replacement={replacementConfirmCodeMask}
				error={errors.code}
				onChange={e => {
					setValue('code', e.target.value)
					if (confirmCodeIsValid(e.target.value) === true)
						handleSubmit(onSubmit)()
				}}
			/>
			{isLoading && <Image src={loader} alt='' width={44} height={44} />}
		</form>
	)
}
