'use client'

import { useMutation } from '@tanstack/react-query'

import { AuthService } from '@/shared/api/services/auth.service'
import { clearAuth, setAuth } from '@/shared/lib/utils/auth.util'
import { useAppDispatch } from '@/shared/model/store/store-hooks'

export const useCheckAuth = () => {
	const dispatch = useAppDispatch()
	const { mutate } = useMutation({
		mutationFn: (props: any) => AuthService.refresh(),
		onSuccess: response => {
			setAuth(response.data, dispatch)
		},
		onError: () => {
			clearAuth(dispatch)
		},
	})

	return {
		mutate,
	}
}
