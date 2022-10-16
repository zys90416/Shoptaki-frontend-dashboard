import React from 'react'
import './UserProfile.css'

export default function UserProfile() {
	return (
		<div className='UserProfile'>
			<div className='content_user'>
				<h1>User Profile</h1>
				<button className='btn-edit' type='button'>Edit Profile</button>
			</div>
			<div className='infoForm'>
				<div className='item_wrap'>
					<div className='user_pic'>
						<span className='avatar'></span>
					</div>
					<div className='user_info'>
						<h2>User Detail</h2>
						<hr/>
						<div>
							<div className='title-input'>
								<span className='title'>Display Name:</span>
								<span className='title_text'>Lu Bai</span>
							</div>
							<div className='title-input'>
								<span className='title'>Date of Birth:</span>
								<span className='title_text'>2021/08/25</span>
							</div>
							<div className='title-input'>
								<span className='title'>Phone Number:</span>
								<span className='title_text'>+1 000 00000</span>
							</div>
							<div className='title-input'>
								<span className='title'>Email Address:</span>
								<span className='title_text'>loremipsum@gmail.com</span>
							</div>
							<div className='title-input'>
								<span className='title'>SmartID:</span>
								<span className='title_text'>1234567890</span>
							</div>
						</div>
						<div className='flex'></div>
					</div>
				</div>
				<div className='item_wrap'>
					<div className='address_user'>
						<h2>Address</h2>
						<hr/>
						<div>
							<div className='title-input'>
								<span className='title'>Display Name:</span>
								<span className='title_text'>Lu Bai</span>
							</div>
							<div className='title-input'>
								<span className='title'>Date of Birth:</span>
								<span className='title_text'>2021/08/25</span>
							</div>
							<div className='title-input'>
								<span className='title'>Phone Number:</span>
								<span className='title_text'>+1 000 00000</span>
							</div>
							<div className='title-input'>
								<span className='title'>Email Address:</span>
								<span className='title_text'>loremipsum@gmail.com</span>
							</div>
							<div className='title-input'>
								<span className='title'>SmartID:</span>
								<span className='title_text'>1234567890</span>
							</div>
						</div>
						<div className='flex'></div>
					</div>


				</div>
				{/*
				<div className='user_info'>
					<h2>User Detail</h2>
					<div className='title-line'></div>
					<div>
						<div className='title-input'>
							<span className='title'>Display Name:</span>
							<span className='title_text'>Lu Bai</span>
						</div>
						<div className='title-input'>
							<span className='title'>Date of Birth:</span>
							<span className='title_text'>2021/08/25</span>
						</div>
						<div className='title-input'>
							<span className='title'>Phone Number:</span>
							<span className='title_text'>+1 000 00000</span>
						</div>
						<div className='title-input'>
							<span className='title'>Email Address:</span>
							<span className='title_text'>loremipsum@gmail.com</span>
						</div>
						<div className='title-input'>
							<span className='title'>SmartID:</span>
							<span className='title_text'>1234567890</span>
						</div>
					</div>
				</div>*/}

			</div>
{/*			<div className='infoForm' id='dashboard-b'>
				<h2>Residential Address</h2>
			</div>*/}
		</div>
	)
}
