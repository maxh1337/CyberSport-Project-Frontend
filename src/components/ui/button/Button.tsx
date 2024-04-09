import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import './Button.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'light-purple' | 'auth-outlined' | 'auth-contained'
	size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'btn',
				{
					'btn-light-purple': variant === 'light-purple',
					'btn-auth-outlined': variant === 'auth-outlined',
					'btn-auth-contained': variant === 'auth-contained',
					'px-5 py-2 text-sm': size === 'sm',
					'btn-large': size === 'lg'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
