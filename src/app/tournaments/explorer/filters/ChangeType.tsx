import Checkbox from '@/ui/checkbox/Checkbox'
import { FC } from 'react'
import { useFilters } from '../useFilters'
import FilterWrapper from './FilterWrapper'

const ChangeType: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Статус турнира	'>
			<Checkbox
				isChecked={queryParams.status === 'Active' ? true : false}
				onClick={() =>
					updateQueryParams(
						'status',
						queryParams.status === 'Active' ? '' : 'Active'
					)
				}
				className='mb-2 text-sm'
			>
				Активный
			</Checkbox>
			<Checkbox
				isChecked={queryParams.status === 'Archive' ? true : false}
				onClick={() =>
					updateQueryParams(
						'status',
						queryParams.status === 'Archive' ? '' : 'Archive'
					)
				}
				className='mb-2 text-sm'
			>
				Архив
			</Checkbox>
		</FilterWrapper>
	)
}

export default ChangeType
