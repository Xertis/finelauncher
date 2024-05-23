import { FC } from 'react'
import styles from './Console.module.scss'
import { IConsoleProps } from './Console.interface.ts'
import { useSettingsContext } from '../../../../contexts/SettingsProvider.tsx'

const Console: FC<IConsoleProps> = ({ logs }) => {
	const settingsContext = useSettingsContext()
	return (
		<>
			<div>
				<h1 className={styles['title']}>Логи игры</h1>
				<div className={styles['container']}>
					{logs ? (
						<div className={styles['logs']}>
							{logs.map(value => (
								<p className='violet-text'>{value}</p>
							))}
						</div>
					) : (
						<h1 className={styles['logs']}>Логи не найдены.</h1>
					)}
					<div>
						<button
							className={'black-style red-bg ' + styles['stop-btn']}
							onClick={() => {
								settingsContext.terminateGameProcess(
									Number(settingsContext.gameData.pid)
								)
							}}
						>
							Остановить игру
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Console