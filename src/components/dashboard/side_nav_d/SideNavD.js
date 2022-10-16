import React, { useState, useEffect } from 'react'
import './SideNavD.css'
import { useHistory } from 'react-router-dom'
export default function SideNavD() {
	const [blue, setBlue] = useState('/dashboard')
	const handleClick = (path) => {
		return () => {
			setBlue(path)
			history.push({ pathname: path })
		}
	}
	let history = useHistory()

	useEffect(() => {
		console.log(window.location.pathname)
		if (window.location.pathname === '/dashboard') {
			console.log('22')
			setBlue('/dashboard')
		} else if (window.location.pathname === '/dashboard/setting') {
			console.log('23')
			setBlue('/dashboard/setting')
		} else if (window.location.pathname === '/dashboard/roles') {
			setBlue('/dashboard/roles')
			console.log('24')
		} else if (window.location.pathname === '/dashboard/review') {
			setBlue('/dashboard/review')
		} else if (window.location.pathname === '/dashboard/dataexchange') {
			setBlue('/dashboard/dataexchange')
		}

	}, [])
	return (
		<div className=' SideNavD'>
			<div className='nav-wrap'>
				<select placeholder='tiktok'> TikTok</select>
				<div id='tiktok'>TikTok</div>
				<div className='nav-phase'>
					<div onClick={handleClick('/dashboard')} className='phase' style={{ backgroundColor: blue === '/dashboard' ? '#E3F2FD' : 'white' }}>
						{' '}
						<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z' fill={blue === '/dashboard' ? '#2196F3' : 'black'} />
						</svg>{' '}
						Dashboard
					</div>
					<div onClick={handleClick('/dashboard/setting')} className='phase' style={{ backgroundColor: blue === '/dashboard/setting' ? '#E3F2FD' : 'white' }}>
						{' '}
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M17.4308 10.98C17.4708 10.66 17.5008 10.34 17.5008 10C17.5008 9.66 17.4708 9.34 17.4308 9.02L19.5408 7.37C19.7308 7.22 19.7808 6.95 19.6608 6.73L17.6608 3.27C17.5408 3.05 17.2708 2.97 17.0508 3.05L14.5608 4.05C14.0408 3.65 13.4808 3.32 12.8708 3.07L12.4908 0.42C12.4608 0.18 12.2508 0 12.0008 0H8.00082C7.75082 0 7.54082 0.18 7.51082 0.42L7.13082 3.07C6.52082 3.32 5.96082 3.66 5.44082 4.05L2.95082 3.05C2.72082 2.96 2.46082 3.05 2.34082 3.27L0.340816 6.73C0.210816 6.95 0.270816 7.22 0.460816 7.37L2.57082 9.02C2.53082 9.34 2.50082 9.67 2.50082 10C2.50082 10.33 2.53082 10.66 2.57082 10.98L0.460816 12.63C0.270816 12.78 0.220816 13.05 0.340816 13.27L2.34082 16.73C2.46082 16.95 2.73082 17.03 2.95082 16.95L5.44082 15.95C5.96082 16.35 6.52082 16.68 7.13082 16.93L7.51082 19.58C7.54082 19.82 7.75082 20 8.00082 20H12.0008C12.2508 20 12.4608 19.82 12.4908 19.58L12.8708 16.93C13.4808 16.68 14.0408 16.34 14.5608 15.95L17.0508 16.95C17.2808 17.04 17.5408 16.95 17.6608 16.73L19.6608 13.27C19.7808 13.05 19.7308 12.78 19.5408 12.63L17.4308 10.98ZM10.0008 13.5C8.07082 13.5 6.50082 11.93 6.50082 10C6.50082 8.07 8.07082 6.5 10.0008 6.5C11.9308 6.5 13.5008 8.07 13.5008 10C13.5008 11.93 11.9308 13.5 10.0008 13.5Z'
								fill={blue === '/dashboard/setting' ? '#2196F3' : 'black'}
							/>
						</svg>{' '}
						Settings
					</div>
					<div onClick={handleClick('/dashboard/roles')} className='phase' style={{ backgroundColor: blue === '/dashboard/roles' ? '#E3F2FD' : 'white' }}>
						{' '}
						<svg width='17' height='19' viewBox='0 0 17 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8.5 9.5C11.1828 9.5 13.3571 7.37363 13.3571 4.75C13.3571 2.12637 11.1828 0 8.5 0C5.81719 0 3.64286 2.12637 3.64286 4.75C3.64286 7.37363 5.81719 9.5 8.5 9.5ZM12.1353 10.7098L10.3214 17.8125L9.10714 12.7656L10.3214 10.6875H6.67857L7.89286 12.7656L6.67857 17.8125L4.86473 10.7098C2.15915 10.8359 0 12.9994 0 15.675V17.2188C0 18.2021 0.815848 19 1.82143 19H15.1786C16.1842 19 17 18.2021 17 17.2188V15.675C17 12.9994 14.8408 10.8359 12.1353 10.7098Z'
								fill={blue === '/dashboard/roles' ? '#2196F3' : 'black'}
							/>
						</svg>{' '}
						Roles
					</div>
					<div onClick={handleClick('/dashboard/review')} className='phase' style={{ backgroundColor: blue === '/dashboard/review' ? '#E3F2FD' : 'white' }}>
						<svg width='17' height='20' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M16.6205 4.73254C13.7632 4.13746 11.1799 2.66395 9.14905 0.47728L8.84678 0.151405C8.75705 0.0569714 8.63425 0.000271138 8.502 0.000271138C8.36032 -0.00442745 8.24698 0.052244 8.15724 0.146677L7.69442 0.633141C5.7675 2.64979 3.33997 4.043 0.676322 4.66641L0.369328 4.73727C0.161523 4.78448 0.0103893 4.96868 0.00566189 5.18594C-0.154898 11.0469 3.13689 15.3541 5.11102 17.3944C6.2823 18.6034 7.81721 19.8314 8.4973 19.8361H8.51145C9.24821 19.8219 10.7973 18.5373 11.9213 17.3519C13.5082 15.68 17.1731 11.1556 16.9936 5.18121C16.9889 4.96395 16.8331 4.77979 16.6205 4.73254ZM7.03682 13.8473L4.85966 11.6702L5.5275 11.0023L7.1286 12.6034L13.1742 8.12323L13.7364 8.88192L7.03682 13.8473Z'
								fill={blue === '/dashboard/review' ? '#2196F3' : 'black'}
							/>
						</svg>{' '}
						App Review
					</div>
					<div onClick={handleClick('/dashboard/dataexchange')} className='phase' style={{ backgroundColor: blue === '/dashboard/dataexchange' ? '#E3F2FD' : 'white' }}>
						<svg width='20' height='19' viewBox='0 0 26 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm2.085 14h-9v2h9v3l5-4-5-4v3zm-4-6v-3l-5 4 5 4v-3h9v-2h-9z'
								fill={blue === '/dashboard/dataexchange' ? '#2196F3' : 'black'}
							/>
						</svg>{' '}
						Data Exchange
					</div>
				</div>
			</div>
		</div>
	)
}
