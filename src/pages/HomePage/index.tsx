import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import { FC } from 'react'
import { useSettingsContext } from '../../contexts/SettingsProvider'

const HomePage: FC = () => {
	const navigate = useNavigate()
	const settingsContext = useSettingsContext()
	return (
		<div className={styles['container']}>
			<h1>
				<p className={'violet-text ' + styles['inline']}>Привет!</p>{' '}
				<p className={styles['inline']}>Давай</p>
			</h1>
			<h1>
				<p className={styles['inline']}>скорей начнем</p>{' '}
				<p className={'violet-text ' + styles['inline']}>играть!</p>
			</h1>
			<div className={styles['btn-container']}>
				<button
					className={'black-style violet-bg ' + styles['mods-btn']}
					onClick={() => {
						navigate('/mods') // переходим на страницу mods
						settingsContext.setTab(2) // делаем 2 страницу активной
					}}
				>
					Моды
				</button>
				<button
					className={'black-style green-bg ' + styles['versions-btn']}
					onClick={() => {
						navigate('/versions') // переходим на страницу versions
						settingsContext.setTab(1) // делаем 1 страницу активной
					}}
				>
					Версии
				</button>
			</div>
		</div>
	)
}

export default HomePage
