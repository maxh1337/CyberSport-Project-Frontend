import cn from 'clsx'
import { forwardRef, useState } from 'react'

import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			placeholder,
			error,
			className,
			type = 'text',
			style,
			Icon,
			variant,
			...rest
		},
		ref
	) => {
		const [isPassShown, setIsPassShown] = useState(false)

		return (
			<div className={cn('mb-3', className)} style={style}>
				<label className=' relative h-full'>
					<span className='mb-1 block ml-1'>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type === 'password' && isPassShown === true ? 'text' : type}
						placeholder={placeholder}
						autoComplete='email'
						className={cn(
							'px-4 py-2 w-full outline-none border-accent2 border focus:border-accent transition-all rounded-lg placeholder:text-sm',
							{
								'!border-error': !!error,
								'!focus:border-error': !!error,
								'!h-20': variant === 'desc'
							}
						)}
						{...rest}
					/>
					{type === 'password' && (
						<i className=' absolute top-[70%] right-3'>
							{!isPassShown && (
								<IoMdEyeOff size={17} onClick={() => setIsPassShown(true)} />
							)}
							{isPassShown && (
								<IoMdEye size={17} onClick={() => setIsPassShown(false)} />
							)}
						</i>
					)}
				</label>
				{error && <div className='text-error mt-1 ml-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
