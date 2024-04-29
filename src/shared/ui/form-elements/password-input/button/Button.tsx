import { FC } from 'react'

import eyeClosed from '@/shared/assets/icons/eye-closed.svg'
import eyeOpened from '@/shared/assets/icons/eye-opened.svg'
import Icon from '@/shared/ui/icon/Icon'

import { IButton } from '../password-input.type'

const Button: FC<IButton> = ({ setType, type }) => {
	return (
		<button
			type='button'
			onClick={() =>
				type === 'password' ? setType('text') : setType('password')
			}
		>
			<Icon src={type === 'password' ? eyeOpened : eyeClosed} />
		</button>
	)
}

export default Button
