export type TypeTournamentDataFilters = {
	name?: string
	game?: 'Dota 2' | 'Cs Go 2' | 'Apex Legends' | 'Fifa 24' | 'Mortal Combat 1'
	tournamentType?: 'Paid' | 'Free' | 'Student' | 'School' | 'Another'
	status?: 'Active' | 'Archive'
	tournamentLevel?: 'General' | 'Custom'
	tournamentFormat?: 'LAN' | 'Online' | 'Esnup' | 'Mixed'
}

export type TypeTournamentParamsFilters = {
	searchParams: TypeTournamentDataFilters
}
