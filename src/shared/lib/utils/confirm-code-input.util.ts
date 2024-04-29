export const confirmCodeInputMask: string = '- - - - - -'

export const confirmCodeInputPlaceholder: string = '------'

export const replacementConfirmCodeMask = { '-': /\d/ }

const regexConfirmCode = /\-|\s/g

// export const confirmCodeRequired = (value: string) =>
// 	value.replace(regexConfirmCode, '').length > 0 || 'Введите код'

export const confirmCodeIsValid = (value: string) =>
	value?.replace(regexConfirmCode, '').length === 6 || 'Код состоит из 6 цифр'

export const replaceConfirmCode = (value: string): string =>
	value.replace(regexConfirmCode, '')
