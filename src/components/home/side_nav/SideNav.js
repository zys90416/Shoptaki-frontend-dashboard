import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SideNav.css'
export default function SideNav() {
	const [app, setApp] = useState('subscribed')
	const [checked1, setChecked1] = useState(true)
	const [checked2, setChecked2] = useState(false)

	let history = useHistory()
	const handleClick1 = (event) => {
		setChecked1(true)
		setChecked2(false)
		setApp('subscribed')
		console.log(event.target.id)
		history.push({
			pathname: `/home/subscribed_apps`,
		})
	}
	const handleClick2 = (event) => {
		setChecked1(false)
		setChecked2(true)
		setApp('administrator')
		console.log(event.target.id)
		history.push({
			pathname: `/home/administrator_apps`,
		})
	}

	return (
		<div className='SideNav Home_SideNav'>
			<div className='nav-wrap'>
				<span className='nav-text'> Apps </span>

				<div className='nav' id='app-type'>
					<div>
						<input onClick={handleClick1} id='subscribed' type='radio' name='app-type' checked={checked1 === true ? true : false} /> Subscribed Apps
					</div>
					<div>
						<input onClick={handleClick2} id='administrator' type='radio' name='app-type' checked={checked2 === true ? true : false} /> Administrator Apps
					</div>
				</div>
			</div>
		</div>
	)
}
