import { IFIO, IId } from './global.type'
import { IInfoTracer } from './info-tracer.type'

export enum ClientType {
	individual,
	corporate,
}

export interface IClient extends IId {
	phone: string
	addresses: string[]
	orders: any
	infoTracer: IInfoTracer
}

export interface IIndividualClient extends IClient, IFIO {
	birthday: Date
}

export interface ICorporateClient extends IClient {
	name: string
	INN: number
	KPP: number
	dateOfCreation: Date
}
