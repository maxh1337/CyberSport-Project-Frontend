import { TournamentService } from '@/services/tournament/tournament.service'
import { IPageIdParam } from '@/types/page-params'
import { Metadata } from 'next'
import TournamentPage from './TournamentPage'

export const revalidate = 60

export async function generateStaticParams() {
	const { data } = await TournamentService.getManyWithTerm()
	const paths = data?.map(tournament => {
		return {
			params: { id: tournament.id }
		}
	})
	return paths
}

export async function generateMetadata({
	params
}: IPageIdParam): Promise<Metadata> {
	const { data: tournament } = await TournamentService.getById(
		params?.id as number
	)

	return {
		title: tournament?.name,
		description: `${tournament?.name}`,
		openGraph: {
			description: `${tournament?.name}`
		}
	}
}

export default async function CategoryPage({ params }: IPageIdParam) {
	return (
		<>
			<TournamentPage params={params} />
		</>
	)
}
