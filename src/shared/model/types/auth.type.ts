import { IUser } from '@/shared/model/types/user.type'

import { IStatusCode } from './global.type'

export interface IRegisterForm extends Pick<IUser, 'name' | 'phone'> {
	password: string
	repeatPassword: string
}

export interface ISignInForm extends Pick<IUser, 'phone'> {
	password: string
}

export interface ISignResponse extends IStatusCode {
	data: {
		confirmUrl: string
		status: string
	}
}

export interface IConfirmAuthForm {
	code: string
}

export interface IAuthResponse extends IStatusCode {
	data: {
		accessToken: string
		user: Pick<IUser, 'id' | 'name' | 'role'>
	}
}
