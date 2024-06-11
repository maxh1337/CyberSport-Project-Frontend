import { IGetAllTournaments } from '@/types/tournament.types'
import Loader from '@/ui/Loader'
import { FC } from 'react'
import styles from './TournamentCatalog.module.scss'
import TournamentItem from './TournamentItem'

interface ITournamentCatalog {
	data: IGetAllTournaments[] | undefined
	isLoading: boolean
}

const TournamentsCatalog: FC<ITournamentCatalog> = ({ data, isLoading }) => {
	if (isLoading) return <Loader />

	return (
		<div className={styles.catalog}>
			<div className={styles.grid}>
				<p>Игра</p>
				<p>Название</p>
				<p>Уровень игры</p>
				<p>Формат</p>
				<p>Вид турнира</p>
				<p>Статус</p>
			</div>
			{data?.length ? (
				data.map(tournament => (
					<TournamentItem item={tournament} key={tournament.id} />
				))
			) : (
				<p>There are no tournaments at the moment</p>
			)}
		</div>
	)
}
export default TournamentsCatalog
