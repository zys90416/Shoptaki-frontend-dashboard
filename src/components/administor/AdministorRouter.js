import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../header/Header'
import CompanyDetails from './company_details/CompanyDetails'
import './AdministorRouter.css'
import AddNewCompany from './add_new_company/AddNewCompany'
export default function AdministorRouter() {
	return (
		<div className='Registration DashBoardRouter Administaor'>
			<Header content='logined' />
			<div className='administor_wrap'>
				<Switch>
					<Route path='/administor/company_details' component={CompanyDetails}></Route>
				</Switch>
				<Switch>
					<Route path='/administor/add_new_company' component={AddNewCompany}></Route>
				</Switch>
			</div>
		</div>
	)
}
