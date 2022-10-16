import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DPHeader from '../header/Header'
import DataPool from './DataPool'
import SideNav from './SideNavDP'
import Pool from './Pool'

export default function DataPoolRouter() {
	return (
		<div>
			<DPHeader content='logined' />
			
			<Switch>
				<Route path='/datapool/pool' component={Pool}></Route>
				<Route path='/datapool' component={DataPool}></Route>
				{/* <Route path='/datapool/category/financial' component={DataPool}></Route>
				<Route path='/datapool/category/government' component={DataPool}></Route>
				<Route path='/datapool/category/health' component={DataPool}></Route> */}
				

			</Switch>
		</div>
	)
}
