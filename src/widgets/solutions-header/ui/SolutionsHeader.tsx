import { FC } from 'react'

import { DisableTableColumnsForm } from '@/features/disable-table-columns-form'
import { OpenTableFilterButton } from '@/features/open-table-filter-button'
import { SolutionsFilters } from '@/features/solutions-filters'

import { EntityPageHeader } from '@/entities/entity-page-header'
import { FiltersScroll } from '@/entities/filters-scroll'

import columnsIcon from '@/shared/assets/icons/columns.svg'
import filterIcon from '@/shared/assets/icons/filter.svg'
import { ITable } from '@/shared/model/types/table.type'

import { switchColumnsName } from '../lib/utils/switch-columns-name.util'

import styles from './SolutionsHeader.module.scss'

export const SolutionsHeader: FC<ITable<any>> = ({ table }) => {
	return (
		<section>
			<EntityPageHeader>
				<OpenTableFilterButton
					iconPath={filterIcon}
					dopModalClass={styles.modalFilter}
				>
					<FiltersScroll>
						<SolutionsFilters />
					</FiltersScroll>
				</OpenTableFilterButton>
				<OpenTableFilterButton iconPath={columnsIcon}>
					<DisableTableColumnsForm switchFn={switchColumnsName} table={table} />
				</OpenTableFilterButton>
			</EntityPageHeader>
		</section>
	)
}
