import { IButtonPeriodConfig, Period } from '../model/types/period.type'

export const periodsButtons: IButtonPeriodConfig[] = [
	{ text: 'День', period: Period.day },
	{ text: 'Неделя', period: Period.week },
	{ text: 'Месяц', period: Period.month },
]
