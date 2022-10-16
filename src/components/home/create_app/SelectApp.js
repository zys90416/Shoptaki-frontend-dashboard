import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppItem from './app_item/AppItem'
import './SelectApp.css'
export default function SelectApp() {
	const handleClick = () => {
		history.goBack()
	}

	const handleClick2 = (event) => {}
	const handleClick3 = () => {
		history.push({
			pathname: `/home/create_app`,
		})
	}
	let history = useHistory()
	const [a, setA] = useState([
		{
			id: 1,
			type: 'Business',
			description:
				'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
		},
		{ id: 2, type: 'ECommerce', description: 'In aningful content.' },
	])
	return (
		<div className='DashBoard UserDetails SelectApp' style={{ border: '1px solid #C4C4C4', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.25)', borderRadius: '20px', padding: '33px 44px' }}>
			<h1 className='font18 weight500'>Select an app type</h1>
			<span>The app type can’t be changed after your app is created.</span>
			<p className='font16 weight500'>Which products, permissions and features does your app need?</p>
			<div id='list' onClick={handleClick2}>
				{a.map((item) => (
					<AppItem key={item.id} type={item.type} description={item.description} />
				))}
			</div>
			<div className='right'>
				<span id='cancel' onClick={handleClick}>
					{' '}
					Cancel{' '}
				</span>
				<span id='continue' onClick={handleClick3}>
					Continue
				</span>
			</div>
		</div>
	)
}
