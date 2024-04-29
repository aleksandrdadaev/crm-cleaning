export interface IQueryParams {
	state: any
	params: URLSearchParams
	otherParams: string[]
	replaceUrl: () => void
}

export interface IQueryParamObject {
	key: string
	value: any
}
