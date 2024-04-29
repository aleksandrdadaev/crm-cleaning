import { createContext } from 'react'

export const UrlContext = createContext<string>('')

export const LoadingContext = createContext<boolean>(false)
