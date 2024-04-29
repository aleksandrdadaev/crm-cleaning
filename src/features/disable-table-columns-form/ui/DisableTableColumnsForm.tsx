import { FC } from 'react'

import Checkbox from '@/shared/ui/form-elements/checkbox/Checkbox'

import { IDisableForm } from '../model/types/disable-form.type'

import styles from './DisableTableColumnsForm.module.scss'

export const DisableTableColumnsForm: FC<IDisableForm> = ({
	switchFn,
	table,
}) => {
	return (
		<div className={styles.wrapper}>
			{table.getAllColumns().map(column => (
				<Checkbox
					checked={column.getIsVisible()}
					disabled={!column.getCanHide()}
					onChange={column.getToggleVisibilityHandler()}
					label={switchFn(column.id)}
				/>
			))}
		</div>
	)
}
