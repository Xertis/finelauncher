import Titlebar from './components/Titlebar/Titlebar'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'

const Layout = () => {
	return (
		<>
			<Titlebar />
			<div className='container'>
				<main>
					<div className='content'>
						<Outlet />
					</div>
				</main>
				<Sidebar />
			</div>
		</>
	)
}

export default Layout
