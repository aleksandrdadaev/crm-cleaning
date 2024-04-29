export const phoneInputMask: string = '+_(___)-___-__-__'

export const replacementPhoneMask = { _: /\d/ }

const regexPhone = /\+|\_|\-|\(|\)/g

export const phoneRequired = (value: string) =>
	value.replace(regexPhone, '').length > 0 || 'Введите телефон'

export const phoneIsValid = (value: string) =>
	value.replace(regexPhone, '').length === 11 ||
	'Введите корректный номер телефона'

export const replacePhone = (value: string): string =>
	value.replace(/\-|\(|\)/g, '')
