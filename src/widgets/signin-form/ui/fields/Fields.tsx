import { FC } from 'react'
import { Controller } from 'react-hook-form'

import {
	phoneInputMask,
	phoneIsValid,
	phoneRequired,
	replacementPhoneMask,
} from '@/shared/lib/utils/phone-input.util'
import { ISignInForm } from '@/shared/model/types/auth.type'
import { IFields } from '@/shared/model/types/form.type'
import MaskedInput from '@/shared/ui/form-elements/masked-input/MaskedInput'
import PasswordInput from '@/shared/ui/form-elements/password-input/PasswordInput'

import styles from './Fields.module.scss'

const Fields: FC<IFields<ISignInForm>> = ({
	control,
	errors,
	getValues,
	register,
}) => {
	return (
		<div className={styles.fields}>
			<MaskedInput
				{...register('phone', {
					required: 'Введите телефон',
					validate: {
						required: value => phoneRequired(value),
						isValid: value => phoneIsValid(value),
					},
				})}
				mask={phoneInputMask}
				placeholder={phoneInputMask}
				replacement={replacementPhoneMask}
				error={errors.phone}
			/>
			<Controller
				control={control}
				rules={{
					required: 'Введите пароль',
				}}
				name='password'
				render={({ field: { onChange, onBlur, value, disabled } }) => (
					<PasswordInput
						onBlur={onBlur}
						onChange={onChange}
						value={value}
						placeholder='Пароль'
						disabled={disabled}
						error={errors.password}
					/>
				)}
			/>
		</div>
	)
}

export default Fields
