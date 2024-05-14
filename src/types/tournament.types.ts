export interface IGetAllTournaments {
	id: string
	name: string
	game: 'Dota 2' | 'Cs Go 2' | 'Apex Legends' | 'Fifa 24' | 'Mortal Combat 1'
	status: 'Active' | 'Archive'
	tournamentType: 'Paid' | 'Free' | 'Student' | 'School' | 'Another'
	tournamentLevel: 'General' | 'Custom'
	tournamentFormat: 'LAN' | 'Online' | 'Esnup' | 'Mixed'
}

export interface IGetOneTournament {
	id: string
	createdAt: string
	updatedAt: string
	name: string
	description: string
	contacts: string
	game: 'Dota 2' | 'Cs Go 2' | 'Apex Legends' | 'Fifa 24' | 'Mortal Combat 1'
	status: 'Active' | 'Archive'
	tournamentType: 'Paid' | 'Free' | 'Student' | 'School' | 'Another'
	tournamentLevel: 'General' | 'Custom'
	tournamentFormat: 'LAN' | 'Online' | 'Esnup' | 'Mixed'
	prepayedShowing: boolean
}
