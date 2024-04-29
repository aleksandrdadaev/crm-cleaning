import { AxiosError } from 'axios'

import { IError } from '@/shared/model/types/error.type'

export const isError = (error: AxiosError<IError, any>, code: number) =>
	error.response?.data.error === code

export const getErrorMessage = (error: AxiosError<IError, any>) =>
	error.response?.data.message
