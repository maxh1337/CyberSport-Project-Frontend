export interface IUser {
	id: number
	email: string
	isAdmin: boolean
	nickname: string
	avatar: Avatar
}

interface Avatar {
	id: number

	documentName: string
	originalName: string
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
