import axios from 'axios'

import { API_URL } from '../config/api.config'
import { ApplicationJson } from '../config/constants.config'
import { getToken } from '../lib/utils/cookies.util'

export const $api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': ApplicationJson,
	},
})

export const $apiRefresh = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

export const $apiWithoutAuth = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': ApplicationJson,
	},
})

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${getToken()}`

	return config
})
