import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export interface IToggleButton {
	e: ChangeEvent<HTMLInputElement>
	isButton: boolean
	setIsButton: Dispatch<SetStateAction<boolean>>
}

export const toggleButton = ({ e, isButton, setIsButton }: IToggleButton) => {
	if (e.target.value) !isButton && setIsButton(true)
	else isButton && setIsButton(false)
}

const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export const passwordIsValid = (value: string) =>
	regexPassword.test(value) || 'Ненадежный пароль'
