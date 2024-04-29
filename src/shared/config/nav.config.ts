import clients from '@/shared/assets/icons/navigation/clients.svg'
import orders from '@/shared/assets/icons/navigation/orders.svg'
import solutions from '@/shared/assets/icons/navigation/solutions.svg'
import staff from '@/shared/assets/icons/navigation/staff.svg'

import { INavLink } from '../model/types/link.type'

import { getHomeUrl } from './url.config'

export const sidebarNavigationLinks: INavLink[] = [
	{
		text: 'Заказы',
		path: getHomeUrl('/orders'),
		icon: orders,
	},
	{
		text: 'Услуги',
		path: getHomeUrl('/solutions'),
		icon: solutions,
	},
	{
		text: 'Клиенты',
		path: getHomeUrl('/clients'),
		icon: clients,
	},
	{
		text: 'Сотрудники',
		path: getHomeUrl('/staff'),
		icon: staff,
	},
]
