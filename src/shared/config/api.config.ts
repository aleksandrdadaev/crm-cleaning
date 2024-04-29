export const API_URL: string = `${process.env.APP_URL}/api`

export const getAuthUrl = (url: string): string => `/auth${url}`

export const getOrderUrl = (url: string): string => `/order${url}`

export const getUserUrl = (url: string): string => `/user${url}`

export const getSolutionUrl = (url: string): string => `/solution${url}`
