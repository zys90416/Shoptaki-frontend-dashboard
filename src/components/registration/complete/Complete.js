import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Complete.css'


export default function Complete() {
    const location = useLocation()
    const loginUrl = '/login?redirectUrl='+location.pathname.slice(1);
	return (
		<div className='Complete'>
            <span className='complete-text'>Complete</span>
			<hr />
			
                <div className='Confirmation'> Your account has been successfully created. </div>

			<form >
            <Link to={loginUrl}>	
				<input className='go-to-my-Account' type='submit' value='Go to Account' />
            </Link>
			</form>
		</div>
	)
}