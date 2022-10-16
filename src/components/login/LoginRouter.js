import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Opt from './Opt'
import Header from '../header/Header'

export default function LoginRouter() {
	return (
		<div>
			<Header content='Register' />
			<Switch>
				<Route path='/login/opt' component={Opt}></Route>
				<Route path='/login' component={Login}></Route>
			</Switch>
		</div>
	)
}
