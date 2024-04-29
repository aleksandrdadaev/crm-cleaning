import { InputMaskProps } from '@react-input/mask'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import {
	Control,
	FieldError,
	FieldErrors,
	FieldValues,
	UseFormGetValues,
	UseFormRegister,
} from 'react-hook-form'

interface IInputProps {
	error?: FieldError | undefined
	gray?: boolean
}

interface IButtonProps {
	isLoading?: boolean
}

interface ICheckboxProps {
	label?: string
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps
type TypeCheckboxProps = InputHTMLAttributes<HTMLInputElement> & ICheckboxProps
type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps

export interface IInput extends TypeInputProps {}
export interface ICheckbox extends TypeCheckboxProps {}
export interface IButton extends TypeButtonProps {}

export interface IMaskedInput extends TypeInputProps, InputMaskProps {}

export interface IFields<T extends FieldValues> {
	register: UseFormRegister<T>
	errors: FieldErrors<T>
	control?: any
	getValues?: UseFormGetValues<T>
}
