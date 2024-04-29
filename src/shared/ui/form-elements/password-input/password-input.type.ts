import { Dispatch, SetStateAction } from 'react'

export type IType = 'text' | 'password'

export interface IButton {
	type: IType
	setType: Dispatch<SetStateAction<IType>>
}
