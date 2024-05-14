import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { TypeTournamentDataFilters } from '@/services/tournament/tournament.types'
import { useFiltersZustand } from '@/store/filters/filters-store'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const { updateQueryParam, queryParams, isFilterUpdated } = useFiltersZustand()

	const { replace } = useRouter()

	useEffect(() => {
		searchParams.forEach((key, value) => {
			updateQueryParam({
				key: key as keyof TypeTournamentDataFilters,
				value
			})
		})
	}, [])

	const updateQueryParams = (
		key: keyof TypeTournamentDataFilters,
		value: string
	) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) {
			// @ts-ignore
			newParams.set(key, String(value))
		} else {
			// @ts-ignore
			newParams.delete(key)
		}

		replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`)
		updateQueryParam({ key, value })
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated
	}
}
