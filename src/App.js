import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginRouter from './components/login/LoginRouter'
import Registration from './components/registration/Registration'
import HomeRouter from './components/home/HomeRouter'
import DashBoardRouter from './components/dashboard/DashBoardRouter'
import './App.css'
import AdministorRouter from './components/administor/AdministorRouter'
import DataPoolRouter from './components/datapool/DataPoolRouter'
import UserProfileRouter from "./components/userprofile/UserProfileRouter";
import InterceptLogin from './components/loginOut/Timer'
var ls = require('localstorage-slim')

function App() {
	return (
		<div className='App'>
			<Router>
        		<InterceptLogin />
				<Switch>
					<Route path='/login'>
						<LoginRouter />
					</Route>

					<Route path='/register'>
						<Registration />
					</Route>

					<Route path='/home'>
						<HomeRouter />
					</Route>

					<Route path='/dashboard'>
						<DashBoardRouter />
					</Route>

					<Route path='/administor'>
						<AdministorRouter />
					</Route>

					<Route path='/logout'>
						<LoginRouter />
					</Route>

					<Route path='/datapool'>
						<DataPoolRouter />
					</Route>
					{/*Add Userprofile Router*/}
					<Route path='/userprofile'>
						<UserProfileRouter />
					</Route>

					<Route path='/'></Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
