'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { AuthService } from '@/shared/api/services/auth.service'
import { isDevelop } from '@/shared/config/constants.config'
import { getAuthUrl } from '@/shared/config/url.config'
import { getErrorMessage } from '@/shared/lib/utils/error.util'
import { replacePhone } from '@/shared/lib/utils/phone-input.util'
import { IRegisterForm } from '@/shared/model/types/auth.type'

export const useRegister = () => {
	const { push } = useRouter()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: IRegisterForm) =>
			AuthService.signup({
				...request,
				phone: replacePhone(request.phone),
			}),
		onSuccess: response => {
			push(getAuthUrl(`/confirm/${response.data.data.confirmUrl}`))
			isDevelop && console.log(response.data.data.status)
		},
		onError: error => isDevelop && console.log(getErrorMessage(error)),
	})

	return {
		mutate,
		isLoading: isPending,
	}
}
