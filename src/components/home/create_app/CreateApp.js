import React from 'react'
import { useHistory } from 'react-router-dom'
import './CreateApp.css'
export default function CreateApp() {
	let history = useHistory()
	const handleClick = () => {
		history.goBack()
	}
	const handleClick2 = () => {
		history.push({
			pathname: `/home/administrator_apps`,
		})
	}

	return (
		<div className='DashBoard UserDetails SelectApp CreateApp'>
			<h1>Create an App</h1>
			<div>
				<h2>App Display Name</h2>
				<p>This is the app name associated with your app ID</p>
				<input type='text' />
			</div>
			<div>
				<h2>App Contact Email</h2>
				<p>This email address is used to contact you about potential policy violations, app restrictions or steps to recover the app if it's been deleted or compromised.</p>
				<input type='text' />
			</div>
			<div>
				<h2>App Purpose</h2>
				<p>This app's primary purpose is to access and use data from Facebook's Platform on behalf of:</p>
				<input type='radio' name='purpose' /> <label>Yourself or your own business</label>
				<br />
				<input type='radio' name='purpose' /> <label>Clients</label>
				<p>If you are developing an app that accesses and uses data from Facebook's Platform on behalf of clients, you are subject to Section 5b of the Platform Terms.</p>
			</div>
			<div>
				<h2>Do you have a Business Manager account? (Optional)</h2>
				<p>
					In order to access certain aspects of the Facebook platform, apps may need to be connected to a verified Business Manager account. If you haven't yet set up an account, you can
					create one now or later in the process.
				</p>
				<select type='select' />
			</div>

			<div className='right'>
				<span id='cancel' onClick={handleClick}>
					Back
				</span>
				<span id='continue' onClick={handleClick2}>
					Continue
				</span>
			</div>
		</div>
	)
}
