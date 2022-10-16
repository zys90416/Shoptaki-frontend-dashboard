import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../header/Header'
import SideNavD from './side_nav_d/SideNavD'
import DashBoard from './DashBoard'
import Setting from './setting/Setting'
import Role from './role/Role'
import Review from './review/Review'
import './DashBoardRouter.css'
import DataExchange from './data_exchange/DataExchange'
export default function DashBoardRouter() {
	return (
		<div className='Registration DashBoardRouter'>
			<Header content='logined' />
			<div className='content-wrap2'>
				<div id='side'>
					<SideNavD />
				</div>
				<div id='main' className=''>
					<Switch>
						<Route path='/dashboard/setting' component={Setting}></Route>
						<Route path='/dashboard/roles' component={Role}></Route>
						<Route path='/dashboard/review' component={Review}></Route>
						<Route path='/dashboard/dataexchange' component={DataExchange}></Route>
						<Route path='/dashboard' component={DashBoard}></Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}
