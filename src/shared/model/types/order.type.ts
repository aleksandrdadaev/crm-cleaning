import { ClientType, IClient } from './client.type'
import { IComment, IId, IStatusCode } from './global.type'
import { IPaymentMethod } from './payment-method.type'
import { ISolution } from './solution.type'
import { IStatus } from './status.type'
import { IUser } from './user.type'

export interface IOrder extends IId, IComment {
	orderNumber: number
	status: IStatus
	user: IUser
	clientType: ClientType
	client: IClient
	orderDate: Date
	solutions: ISolution[]
	address: string
	stuff: IUser[]
	paymentMethod: IPaymentMethod
	price: number
}

export interface IOrderCountResponse extends IStatusCode {
	data: number
}
