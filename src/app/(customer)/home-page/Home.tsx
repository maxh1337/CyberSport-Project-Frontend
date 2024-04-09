'use client'

import AdSlider from '@/ui/ad-slider/Slider'
import { slides } from '@/ui/ad-slider/slider-ads'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<section className={styles.main}>
			<AdSlider slides={slides} />
			<div>hg2</div>
			<div>hg3</div>
		</section>
	)
}

export default Home
