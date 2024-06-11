import { gameToImage } from '@/constants/help.constants'
import { IGetAllTournaments } from '@/types/tournament.types'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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

	const { push } = useRouter()

	return (
		<div className={styles.item}>
			<Image src={`${getImageUrl()}`} alt='Icon' width={30} height={30} />
			<p
				className=' hover:text-secondary hover:cursor-pointer'
				onClick={() => {
					push(`tournament/${item.id}`)
				}}
			>
				{item.name}
			</p>
			<p>{item.tournamentLevel}</p>
			<p>{item.tournamentType}</p>
			<p>{item.tournamentFormat}</p>
			<p
				className={cn(
					item?.status === 'Active' ? ' text-success' : ' text-error'
				)}
			>
				{item.status}
			</p>
		</div>
	)
}
export default TournamentItem
