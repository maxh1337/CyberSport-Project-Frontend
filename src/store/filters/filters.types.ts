import { TypePlantDataFilters } from '@/services/plant/plant.types'

export interface IFiltersActionsPayload {
	key: keyof TypePlantDataFilters
	value: string
}
