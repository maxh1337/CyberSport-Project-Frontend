import cn from 'clsx'
import { FC } from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import styles from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ clickHandler, variant }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft
			})}
		>
			{!isLeft && <MdChevronRight />}
			{isLeft && <MdChevronLeft />}
		</button>
	)
}

export default SlideArrow
