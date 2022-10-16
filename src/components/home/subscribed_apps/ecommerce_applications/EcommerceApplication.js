import React from 'react'
import { useHistory } from 'react-router-dom'
import CreateAppButton from '../../create_app/CreateAppButton'
export default function EcommerceApplication() {
	const handleClick = () => {
		history.goBack()
	}
	let history = useHistory()
	return (
		<div className='DashBoard UserDetails SocialApplications'>
			<CreateAppButton style={{ position: 'absolute', right: '0', top: '-60px' }} />

			<div>
				<svg id='leftarrow' onClick={handleClick} width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.7'
						d='M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM18 7L1 7V9L18 9V7Z'
						fill='black'
					/>
				</svg>
				&nbsp;&nbsp;
				<span className='userdetail-text'>EcommerceApplication Applications</span>
				<hr />
				<div className='document-wrap'></div>
			</div>

			<div id='no-app' style={{ marginTop: '170px' }}>
				{' '}
				No apps subscribed yet{' '}
			</div>
		</div>
	)
}
