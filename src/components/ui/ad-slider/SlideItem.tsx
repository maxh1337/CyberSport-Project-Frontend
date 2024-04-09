import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { ISlide } from '@/components/ui/ad-slider/slider.interface'

import Button from '../button/Button'
import styles from './Slider.module.scss'

interface ISlideItem {
	slide: ISlide
}

const SlideItem: FC<ISlideItem> = ({ slide }) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.imageUrl && (
				<Image
					fill
					className={styles.image}
					src={slide.imageUrl}
					alt={slide.title}
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				{slide.buttonTitle && (
					<Button
						className={styles.button}
						onClick={() => push(slide.link)}
						variant='auth-contained'
					>
						{slide.buttonTitle}
					</Button>
				)}
			</div>
		</div>
	)
}

export default SlideItem
