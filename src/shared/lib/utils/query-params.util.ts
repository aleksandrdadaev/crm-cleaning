import {
	IQueryParamObject,
	IQueryParams,
} from '@/shared/model/types/query-params.types'

export const createQueryParam = ({ key, value }: IQueryParamObject): string => {
	return value ? `${key}=${value}` : ''
}

export const createQueryObject = (param: any): IQueryParamObject => ({
	key: Object.keys(param)[0],
	value: Object.values(param)[0],
})

export const createQueryString = (params: IQueryParamObject[]) => {
	let stringParams: string[] = params.map(object => createQueryParam(object))
	let string = stringParams.filter(el => el !== '').join('&')

	return string
}
