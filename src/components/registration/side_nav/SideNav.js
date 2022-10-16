import React, { useState, useEffect } from 'react'

import './SideNav.css'

export default function SideNav(props) {
	const [phase, setPhase] = useState(props.phase)
	useEffect(() => {
		setPhase(props.phase)
		console.log(props.phase)
		document.getElementsByClassName('progress-bar')[0].style.backgroundColor = '#005D9C'
		document.getElementsByClassName('progress-bar')[0].style.height = props.phase * 79 + 21 + 'px'
		let text = document.getElementsByClassName('phase')
		for (let i = 0; i < props.phase + 1; i++) {
			if (i < props.phase) {
				text[i].style.fontWeight = '300'
			}
			text[i].style.opacity = 1.0
		}
		document.getElementsByClassName('phase')[props.phase].style.fontWeight = '500'
	}, [props.phase])

	return (
		<div className='SideNav'>
			<div className='nav-wrap'>
				<span className='nav-text'>Registration Form</span>

				<hr />

				<div className='nav-phase'>
					<div className='progress-bar'> </div>

					<div className='phase'>User Details</div>
					<div className='phase'>Residential Address</div>
					<div className='phase'>Verification</div>
					<div className='phase'>Company Details</div>
					<div className='phase'>Upload Documents</div>
				</div>
			</div>
		</div>
	)
}
