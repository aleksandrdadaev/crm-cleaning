import { FC } from 'react'

import { getPrice, replacePrice } from '@/shared/lib/utils/price.util'
import { IInput } from '@/shared/model/types/form.type'

import Input from '../input/Input'

const PriceInput: FC<IInput> = ({ onChange, value, name, ...rest }) => {
	return (
		<Input
			value={getPrice(value || '', true)}
			onChange={e => onChange && onChange(replacePrice(e.target.value) as any)}
			{...rest}
		/>
	)
}

export default PriceInput
