import React from 'react'
import './DashBoard.css'
import AppBox from '../home/app_component/AppBox'
export default function DashBoard(props) {
	return (
		<div className='DashBoard2'>
			<h1>Dashboard</h1>
			<div className='flex'>
				<div id='dashboard-l'>
					<h2>Application Rate Limit</h2>
					<hr />
					<div className='flex'>
						<div id='picture'></div>
						<div>
							<span className='font16 bold'>TikTok </span>
							<br />
							App ID: 518802205854801
						</div>
					</div>
					<div className='flex_db'>
						<div>0% of limit used</div>
						<div id='view_detail'>View Details</div>
					</div>
					<div className='flex_db'>
						<div id='progress_db'></div>
						<div>100% remaining</div>
					</div>
				</div>

				<div id='dashboard-r'>
					<h2>User Rate Limit</h2>
					<hr />
					<div className='flex2'>
						<div id='user_rate_limit'>
							<span style={{ fontSize: ' 28px' }}>0</span>
							<br />
							Users throttled
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
