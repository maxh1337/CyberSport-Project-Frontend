'use client'
import { useAuthRedirect } from '@/app/auth/useAuthRedirect'
import { validEmail } from '@/app/auth/valid-email'
import { useUsersZustand } from '@/store/user/user-store'
import { ILogin } from '@/types/user.interface'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const LoginPage: FC = () => {
	useAuthRedirect()

	const { login, isLoading } = useUsersZustand()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ILogin>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<ILogin> = data => {
		login(data)

		reset()
	}

	return (
		<div className='h-full flex justify-center animate-fade-in'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-lg bg-white p-8 mt-10 w-96 mr-24'
			>
				<Heading className='capitalize text-center mb-8'>Вход</Heading>

				{isLoading ? (
					<Loader />
				) : (
					<>
						<Field
							{...formRegister('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email address'
								}
							})}
							autoComplete='Email'
							placeholder='Email'
							error={errors.email?.message}
						/>
						<Field
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 8,
									message: 'Min length should more 8 symbols'
								}
							})}
							type='password'
							placeholder='Password'
							error={errors.password?.message}
						/>
						<Link
							className=' m-auto justify-center flex text-blue'
							href='/auth/register'
						>
							Нет аккаунта? Зарегистрируйтесь!
						</Link>
						<div className='text-center'>
							<Button
								variant='auth-contained'
								size='md'
								type='submit'
								className=' mt-3'
							>
								Войти
							</Button>{' '}
						</div>
					</>
				)}
			</form>
		</div>
	)
}
export default LoginPage
