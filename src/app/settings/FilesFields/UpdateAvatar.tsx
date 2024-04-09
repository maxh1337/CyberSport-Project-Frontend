import { useProfile } from '@/hooks/useProfile'
import { Skeleton } from '@mui/material'
import { default as Image } from 'next/image'
import { CSSProperties, FC } from 'react'
import styles from './form.module.scss'
import { useUpload } from './useUpdateAvatar'

export interface IUploadField {
	style?: CSSProperties
	isNoImage?: boolean
}

const UpdateAvatar: FC<IUploadField> = ({ isNoImage = false, style }) => {
	const { data } = useProfile()
	const { isLoading, uploadFile, error } = useUpload()

	return (
		<div style={style}>
			<div className={styles.uploadField}>
				{!isNoImage && (
					<div>
						{isLoading ? (
							<Skeleton
								width={120}
								height={120}
								variant='circular'
								animation='pulse'
							/>
						) : (
							<Image
								src={`http://localhost:5200/uploads/avatars/${data?.avatar?.documentName}`}
								alt='EditAvatar'
								unoptimized
								priority
								width={120}
								height={120}
								className=' relative rounded-full cursor-pointer border border-white object-center object-contain '
							/>
						)}
					</div>
				)}
				<label>
					<input
						title=' '
						type='file'
						accept='image/*'
						onChange={uploadFile}
						className={styles.input}
					/>
					{/* @ts-ignore */}
					<div className={styles.error}>{error}</div>
				</label>
			</div>
		</div>
	)
}
export default UpdateAvatar

//dgQ