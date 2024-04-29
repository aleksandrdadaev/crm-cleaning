import { IFIO, IId, IStatusCode } from './global.type'

export const enum UserRole {
	cleaner = 'cleaner',
	driver = 'driver',
	manager = 'manager',
	admin = 'admin',
}

export interface IUser extends IId, IFIO {
	phone: string
	photoPath: string
	role: UserRole
}

export interface IUserResponse extends IStatusCode {
	data: IUser
}
