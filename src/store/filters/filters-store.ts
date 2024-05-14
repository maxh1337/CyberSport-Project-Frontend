import { TypeTournamentDataFilters } from '@/services/tournament/tournament.types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface IFiltersActionsPayload {
	key: keyof TypeTournamentDataFilters
	value: string
}

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: TypeTournamentDataFilters
	updateQueryParam: (payload: IFiltersActionsPayload) => void
	resetFilterUpdate: () => void
}

export const useFiltersZustand = create<IFiltersState>()(
	devtools(set => ({
		isFilterUpdated: false,
		queryParams: {
			searchTerm: '',
			status: 'Active'
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
