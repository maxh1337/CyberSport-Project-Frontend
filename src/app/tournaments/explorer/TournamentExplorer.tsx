'use client'

import cn from 'clsx'
import { FC, useEffect, useState } from 'react'

import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'

import Search from '@/app/tournaments/explorer/Search'
import { TournamentService } from '@/services/tournament/tournament.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import styles from './TournamentExplorer.module.scss'
import Filters from './filters/Filters'
import TournamentsCatalog from './tournaments-catalog/TournamentsCatalog'
import { useFilters } from './useFilters'

const TournamentExplorer: FC = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { isFilterUpdated, queryParams } = useFilters()

	const {
		data: tournaments,
		isLoading: isTournamentsLoading,
		refetch: refetchTournaments
	} = useQuery({
		queryKey: ['tournament explorer', queryParams],
		queryFn: () => TournamentService.getManyWithTerm(queryParams),
		select: ({ data }) => data,
		enabled: isFilterUpdated
	})

	useEffect(() => {
		refetchTournaments()
	}, [])

	return (
		<div className={styles.mainGrid}>
			<div className='flex items-center justify-between mb-7'>
				<Heading className='text-green'>
					{queryParams.name
						? `Результаты поиска по "${queryParams.name}"`
						: `Поиск`}
				</Heading>
			</div>
			<Search refetch={refetchTournaments} />
			<div className=' flex flex-col mb-5'>
				<p className=' mb-2'>Платное продвижение</p>
				<div className=' flex flex-row gap-10'>
					<div className=' w-[25%] bg-accent1 rounded-xl flex flex-row items-center'>
						<div className=' w-[35%] bg-accent rounded-xl flex items-center justify-center py-2'>
							<Image
								src='./images/game-icons/dota2-icon.svg'
								width={60}
								height={60}
								alt='gf'
							/>
						</div>
					</div>
					<div className=' w-[25%] h-full bg-accent1 rounded-xl flex flex-row items-center'>
						<div className=' w-[35%] h-full bg-accent rounded-xl flex items-center justify-center py-2'>
							<Image
								src='./images/game-icons/CsGo-icon.svg'
								width={60}
								height={60}
								alt='gf'
							/>
						</div>
						<p className=' ml-5'>TEST NAME</p>
					</div>
				</div>
			</div>
			<div>
				<Button
					variant='light-purple'
					onClick={() => setIsFilterOpen(!isFilterOpen)}
					className='mb-7'
				>
					{isFilterOpen ? 'Закрыть' : 'Открыть'} фильтры
				</Button>
			</div>
			<div
				className={cn(styles.explorer, {
					[styles.filterOpened]: isFilterOpen
				})}
			>
				<div>
					<Filters />
				</div>
				<section className=' h-[60%]'>
					<TournamentsCatalog
						data={tournaments}
						isLoading={isTournamentsLoading}
					/>
				</section>
			</div>
		</div>
	)
}

export default TournamentExplorer
