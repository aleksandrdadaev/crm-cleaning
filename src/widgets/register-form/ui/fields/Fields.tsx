import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { passwordIsValid } from '@/shared/lib/utils/password-input.util'
import {
	phoneInputMask,
	phoneIsValid,
	phoneRequired,
	replacementPhoneMask,
} from '@/shared/lib/utils/phone-input.util'
import { IRegisterForm } from '@/shared/model/types/auth.type'
import { IFields } from '@/shared/model/types/form.type'
import Input from '@/shared/ui/form-elements/input/Input'
import MaskedInput from '@/shared/ui/form-elements/masked-input/MaskedInput'
import PasswordInput from '@/shared/ui/form-elements/password-input/PasswordInput'

import styles from './Fields.module.scss'

const Fields: FC<IFields<IRegisterForm>> = ({
	control,
	errors,
	register,
	getValues,
}) => {
	return (
		<div className={styles.fields}>
			<Input
				{...register('name', { required: 'Введите имя' })}
				placeholder='Имя'
				error={errors.name}
			/>
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
					validate: {
						isValid: value => passwordIsValid(value),
					},
				}}
				name='password'
				render={({ field: { onChange, onBlur, value, disabled } }) => (
					<PasswordInput
						onBlur={onBlur}
						onChange={onChange}
						value={value}
						disabled={disabled}
						placeholder='Пароль'
						error={errors.password}
					/>
				)}
			/>
			<Controller
				control={control}
				rules={{
					required: 'Повторите пароль',
					validate: {
						repeat: value => {
							if (getValues)
								return value === getValues('password') || 'Пароли не совпадают'
						},
					},
				}}
				name='repeatPassword'
				render={({ field: { onChange, onBlur, value, disabled } }) => (
					<PasswordInput
						onBlur={onBlur}
						onChange={onChange}
						value={value}
						disabled={disabled}
						placeholder='Повторите пароль'
						error={errors.repeatPassword}
					/>
				)}
			/>
		</div>
	)
}

export default Fields
