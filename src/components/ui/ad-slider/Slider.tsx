import SlideArrow from '@/components/ui/ad-slider/SlideArrow/SlideArrow'
import SlideItem from '@/components/ui/ad-slider/SlideItem'
import { ISlide } from '@/components/ui/ad-slider/slider.interface'
import { useSlider } from '@/components/ui/ad-slider/useSlider'
import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from './Slider.module.scss'

interface ISlider {
	slides: ISlide[]
}

const AdSlider: FC<ISlider> = ({ slides }) => {
	const { handleClick, isNext, index, slideIn, isPrev } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames='slide-animation'
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} />
			</CSSTransition>
			{isPrev && (
				<SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
			)}
			{isNext && (
				<SlideArrow variant='right' clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default AdSlider
