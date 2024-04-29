import { ITable } from '@/shared/model/types/table.type'

export interface IDisableForm extends ITable<any> {
	switchFn: (id: string) => string
}
