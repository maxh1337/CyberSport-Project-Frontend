import instance from '@/api/api.interceptor'
import { IGetAllTournaments } from '@/types/tournament.types'
import { TypeTournamentDataFilters } from './tournament.types'

const TOURNAMENT = 'tournament'

export const TournamentService = {
	async getManyWithTerm(queryData = {} as TypeTournamentDataFilters) {
		return instance<IGetAllTournaments[]>({
			url: `${TOURNAMENT}/get-tournaments/`,
			method: 'GET',
			params: queryData
		})
	},

	async getById(id: number) {
		return instance<IGetAllTournaments>({
			url: `${TOURNAMENT}/by-id/${id}`,
			method: 'GET'
		})
	}
}
