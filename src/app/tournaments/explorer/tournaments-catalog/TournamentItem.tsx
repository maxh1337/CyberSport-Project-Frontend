import { gameToImage } from '@/constants/help.constants'
import { IGetAllTournaments } from '@/types/tournament.types'
import Image from 'next/image'
import { FC } from 'react'
import styles from './TournamentItem.module.scss'

interface ITournamentItem {
	item: IGetAllTournaments
}

const TournamentItem: FC<ITournamentItem> = ({ item }) => {
	function getImageUrl() {
		const result = gameToImage.find(({ game }) => game === item.game)

		return result?.url
	}

	return (
		<div className={styles.item}>
			<Image src={`${getImageUrl()}`} alt='Icon' width={30} height={30} />
			<p>{item.name}</p>
			<p>{item.tournamentLevel}</p>
			<p>{item.tournamentType}</p>
			<p>{item.tournamentFormat}</p>
			<p>{item.status}</p>
		</div>
	)
}
export default TournamentItem
