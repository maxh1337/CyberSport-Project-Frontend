'use client'

import { TournamentService } from '@/services/tournament/tournament.service'
import { IPageIdParam } from '@/types/page-params'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import styles from './TournamentPage.module.scss'

const TournamentPage: FC<IPageIdParam> = ({ params }) => {
	const [mainPart, setMainPart] = useState(true)
	useEffect(() => {
		console.log(params?.id)
	}, [])

	const {
		data: tournament,
		isLoading: isTournamentLoading,
		refetch: refetchTournament
	} = useQuery({
		queryKey: ['fetch tournament'],
		queryFn: () => TournamentService.getById(params?.id as number),
		select: ({ data }) => data
	})

	return (
		<>
			<section className=' w-11/12'>
				<div className={styles.main}>
					<div className={styles.div1}>
						<img
							src='/images/tournament_logo.jpeg'
							width='100%'
							height='100%'
							alt='testikc'
						/>
					</div>
					<div className={styles.div2}>
						<h1>{tournament?.game}</h1>
						<h1>{tournament?.name}</h1>
						<h1
							className={cn(
								tournament?.status === 'Active'
									? ' text-success'
									: ' text-error'
							)}
						>
							{tournament?.status}
						</h1>
					</div>
					<div className={styles.div3}>
						<button
							className={cn(
								mainPart === true
									? 'bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary border'
									: 'text-secondary border border-secondary hover:bg-secondary hover:border-secondary hover:border hover:text-white'
							)}
							onClick={() => setMainPart(true)}
						>
							Обзор
						</button>
						<button
							className={cn(
								mainPart === false
									? 'bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary border'
									: 'text-secondary border border-secondary hover:bg-secondary hover:border-secondary hover:border hover:text-white'
							)}
							onClick={() => setMainPart(false)}
						>
							Контакты
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default TournamentPage
