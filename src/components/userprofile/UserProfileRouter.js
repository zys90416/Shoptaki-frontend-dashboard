import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../header/Header'
import SideNavD from "../dashboard/side_nav_d/SideNavD";
import Setting from '../dashboard/setting/Setting';
import SideNav from '../home/side_nav/SideNav';
import SubscribedApps from '../home/subscribed_apps/SubscribedApps'
import './UserProfileRouter.css'
import UserProfile from "./UserProfile";
import UserProfile_edit from "./edit/UserProfile_edit";


export default function UserProfileRouter(props) {
	console.log('UserProfileRouter props='+ JSON.stringify(props))
	return (
		<div className='UserProfileRouter'>
			<Header content='logined' />
			<div className='content-wrap'>
				<div id='side'>
					<SideNavD />
				</div>
				<div id='main' className=''>
					<Switch>
						<Route path='/userprofile/edit' component={UserProfile_edit}></Route>

						<Route path='/userprofile' component={UserProfile}></Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}
