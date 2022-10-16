import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../header/Header'
import SideNav from './side_nav/SideNav'
import SubscribedApps from './subscribed_apps/SubscribedApps'
import SocialApplications from './subscribed_apps/social_applications/SocialApplications'
import AdministratorApps from './administrator_apps/AdministratorApps'
import FinancialApplication from './subscribed_apps/financial_applications/FinancialApplication'
import EcommerceApplication from './subscribed_apps/ecommerce_applications/EcommerceApplication'
import './HomeRouter.css'
import RemoveApp from './remove_app/RemoveApp'
import SelectApp from './create_app/SelectApp'
import CreateApp from './create_app/CreateApp'

export default function HomeRouter(props) {
	console.log('HomeRouter props='+ JSON.stringify(props))

	return (
		<div className='HomeRouter'>
			<Header />
			<div className='content-wrap'>
				<SideNav />
				<Switch>
					<Route path='/home/administrator_apps' component={AdministratorApps}></Route>
					<Route path='/home/social_applications' component={SocialApplications}></Route>
					<Route path='/home/subscribed_apps' component={SubscribedApps}></Route>
					<Route path='/home/financial_applications' component={FinancialApplication}></Route>
					<Route path='/home/ecommerce_applications' component={EcommerceApplication}></Route>
					<Route path='/home/select_app' component={SelectApp}></Route>
					<Route path='/home/create_app' component={CreateApp}></Route>

					<Route path='/home/' component={SubscribedApps}></Route>
				</Switch>
			</div>
		</div>
	)
}
