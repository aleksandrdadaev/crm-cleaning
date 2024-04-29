interface IColumnSizes {
	minSize?: number
	size?: number
	maxSize?: number
}

export const getColumnSizes = ({
	size = 150,
	maxSize = 500,
	minSize = 100,
}: IColumnSizes): IColumnSizes => {
	return {
		size,
		maxSize,
		minSize,
	}
}
