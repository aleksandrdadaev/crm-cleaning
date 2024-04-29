export const switchColumnsName = (id: string): string => {
	switch (id) {
		case 'name':
			return 'Услуга'
		case 'price':
			return 'Цена'
		case 'costPrice':
			return 'Себестоимость'
		case 'difficulty':
			return 'Сложность'
		case 'comment':
			return 'Комментарий'
		default:
			return ''
	}
}
