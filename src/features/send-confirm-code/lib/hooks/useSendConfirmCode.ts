'use client'

import { useMutation } from '@tanstack/react-query'

import { AuthService } from '@/shared/api/services/auth.service'
import { isDevelop } from '@/shared/config/constants.config'
import { setAuth } from '@/shared/lib/utils/auth.util'
import { replaceConfirmCode } from '@/shared/lib/utils/confirm-code-input.util'
import { getErrorMessage, isError } from '@/shared/lib/utils/error.util'
import {
	notificationError,
	notificationWarning,
} from '@/shared/lib/utils/notification/notification.util'
import { useAppDispatch } from '@/shared/model/store/store-hooks'
import { IConfirmAuthForm } from '@/shared/model/types/auth.type'

export const useSendConfirmCode = (url: string) => {
	const dispatch = useAppDispatch()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: IConfirmAuthForm) =>
			AuthService.sendCode(url, { code: replaceConfirmCode(request.code) }),
		onSuccess: response => {
			if (isDevelop) {
				console.table(response.data.data.user)
				console.log(response.data.data.accessToken)
			}
			setAuth(response.data, dispatch)
		},
		onError: error => {
			if (isDevelop) console.log(getErrorMessage(error))
			if (isError(error, 14) || isError(error, 5))
				notificationError(getErrorMessage(error))
		},
	})

	return {
		mutate,
		isLoading: isPending,
	}
}
