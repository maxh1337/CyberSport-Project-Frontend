import { TypePlantDataFilters } from '@/services/plant/plant.types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface IFiltersActionsPayload {
	key: keyof TypePlantDataFilters
	value: string
}

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: TypePlantDataFilters
	updateQueryParam: (payload: IFiltersActionsPayload) => void
	resetFilterUpdate: () => void
}

export const useFiltersZustand = create<IFiltersState>()(
	devtools(set => ({
		isFilterUpdated: false,
		queryParams: {
			searchTerm: ''
		},
		updateQueryParam: payload => {
			const { key, value } = payload
			set(
				{ queryParams: { [key]: value }, isFilterUpdated: true },
				false,
				'Update query params'
			)
		},
		resetFilterUpdate: () => {
			set({ isFilterUpdated: false }, false, 'Reset filter update')
		}
	}))
)
