import { axiosClassic } from '@/api/api.interceptor'
import { REFRESH_TOKEN } from '@/constants/token.constants'
import { removeFromStorage, saveToStorage } from '@/services/auth/auth.helper'
import { ILogin, IRegister, IUser } from '@/types/user.interface'
import { getStoreLocal } from '@/utils/local-storage'
import Cookies from 'js-cookie'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IAuthResponse } from '../../types/user.interface'

export interface UserStateZustand {
	user: IUser
	isLoading: boolean
	setUser: (newUser: IUser) => void
	login: (data: ILogin) => Promise<void>
	register: (data: IRegister) => Promise<void>
	getNewTokens: () => Promise<void>
	logOut: () => Promise<void>
}

export const useUsersZustand = create<UserStateZustand>()(
	devtools(set => ({
		user: getStoreLocal('user'),
		isLoading: false,
		setUser: newUser => set({ user: newUser }, false, 'Set User'),
		login: async data => {
			try {
				const response = await axiosClassic<IAuthResponse>({
					url: `/auth/login`,
					method: 'POST',
					data
				})

				if (response.data.accessToken) saveToStorage(response.data)

				set({ user: response.data.user }, false, 'set user data after login')
			} catch (error: any) {
				console.log(error?.response?.data.message)
			}
		},
		register: async data => {
			try {
				const response = await axiosClassic<IAuthResponse>({
					url: `/auth/register`,
					method: 'POST',
					data
				})

				if (response.data.accessToken) saveToStorage(response.data)

				set({ user: response.data.user }, false, 'set user data after register')
			} catch (error: any) {
				console.log(error?.response?.data.message)
			}
		},
		getNewTokens: async () => {
			try {
				const refreshToken = Cookies.get(REFRESH_TOKEN)

				const response = await axiosClassic<string, { data: IAuthResponse }>({
					url: `/auth/login/access-token`,
					method: 'POST',
					data: { refreshToken }
				})

				if (response.data.accessToken) saveToStorage(response.data)

				set({ user: response.data.user }, false, 'set user after getNewTokens')
			} catch (error: any) {
				console.log(error?.response?.data.message)
			}
		},
		logOut: async () => {
			set({ user: undefined }, false, 'clear user after logout')
			removeFromStorage()
		}
	}))
)
