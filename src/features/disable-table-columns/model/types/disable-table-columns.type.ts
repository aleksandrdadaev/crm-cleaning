import { ITable } from '@/shared/model/types/table.type'

export interface IDisableTableColumns extends ITable<any> {
	switchFn: (id: string) => string
}
