export const transformTime = (time: number): string => {
	if (String(time).length < 2) return `0${time}`
	else return String(time)
}
