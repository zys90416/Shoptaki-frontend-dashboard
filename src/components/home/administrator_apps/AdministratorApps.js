import React from 'react'
import { useHistory } from 'react-router-dom'
import './AdministratorApp.css'
import CreateAppButton from '../create_app/CreateAppButton'

import AppBox from '../app_component/AppBox'
export default function AdministratorApps() {
	const handleClick = () => {
		history.goBack()
	}
	const handleClick2 = () => {
		history.push({ pathname: 'select_app' })
	}
	let history = useHistory()
	return (
		<div className='DashBoard UserDetails AdministratorApp'>
			{/*<svg className='center' width='43' height='43' viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.3'>
						<rect x='17.8613' width='7.27692' height='43' fill='black' />
						<rect x='43' y='17.8615' width='7.27692' height='43' transform='rotate(90 43 17.8615)' fill='black' />
					</g>
				</svg>
			
				<div id='no-app2'>
					No apps yet <br />
					To get started, create your first app.
				</div>
				*/}
			<div>
				<svg id='leftarrow' onClick={handleClick} width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.7'
						d='M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM18 7L1 7V9L18 9V7Z'
						fill='black'
					/>
				</svg>
				&nbsp;&nbsp;
				<span className='userdetail-text'>Administrator Applications</span>
				<hr />
				<div className='document-wrap'></div>
			</div>

			<div className='flex-a'>
				<AppBox admin='true' app_name='Facebook' app_id='518802205854801' app_type='Social' />
				<AppBox admin='true' app_name='Twitter' app_id='518802205854801' app_type='Social' />
				<AppBox admin='true' app_name='Instagram' app_id='518802205854801' app_type='Social' />
				<div id='create-app2' onClick={handleClick2}>
					<div>
						<svg className='center' width='43' height='43' viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g opacity='0.3'>
								<rect x='17.8613' width='7.27692' height='43' fill='black' />
								<rect x='43' y='17.8615' width='7.27692' height='43' transform='rotate(90 43 17.8615)' fill='black' />
							</g>
						</svg>
						<br />
						Create app
					</div>
				</div>
			</div>

			{/*<CreateAppButton style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)', marginTop: '20px' }} />
			 */}
		</div>
	)
}
