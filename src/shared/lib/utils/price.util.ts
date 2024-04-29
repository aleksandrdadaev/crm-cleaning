export const getPrice = (number: number | unknown, input?: boolean): string => {
	let price: string = ''
	let reverseArray = String(number).split('').reverse()
	reverseArray.forEach((value, index, arr) =>
		(index + 1) % 3 === 0 && index + 1 !== arr.length
			? (price += `${value} `)
			: (price += String(value))
	)
	return price.split('').reverse().join('') + `${input ? '' : ' ₽'}`
}

export const priceRegex = /[^\d]/g

export const replacePrice = (value: string): string =>
	value.replace(priceRegex, '')
