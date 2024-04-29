import { IComment, IId, IStatusCode } from './global.type'

export enum Difficulty {
	easy = 1,
	medium = 2,
	hard = 3,
}

export interface ISolution extends IId, IComment {
	name: string
	price: number
	costPrice: number
	difficulty: Difficulty
}

export interface ISolutionResponse extends IStatusCode {
	data: ISolution
}

export interface ISolutionAllResponse extends IStatusCode {
	data: {
		solutions: ISolution[]
		count: number
	}
}
