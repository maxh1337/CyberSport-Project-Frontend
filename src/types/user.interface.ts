export interface IUser {
	id: number
	email: string
	nickname: string
	avatar: IUserFile
	isAdmin: boolean
	description: string
	status: 'Player' | 'Referee' | 'Coach' | 'Manager' | 'Organizer' | 'Executor'
	role: 'Admin' | 'Moderator' | 'User'
	teamRole: 'Owner' | 'Captain' | 'Player' | 'Substitute'
	documents: IUserFile[]
}

export interface IUserFile {
	id: number
	createdAt: string
	documentName: string
	originalName: string
	size: number
	mimeType: string
	userId: number
}

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface ILogin {
	email: string
	password: string
}

export interface IRegister {
	email: string
	password: string
	nickname: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
