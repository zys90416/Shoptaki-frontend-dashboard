import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './RemoveApp.css'
import ReactCodeInput from 'react-verification-code-input'
export default function RemoveApp(props) {
	let history = useHistory()
	const [showConfirmation, setShowConfirmation] = useState(true)
	const [showOpt, setShowOpt] = useState(false)

	const handleComplete = (data) => {
		console.log(data)
	}
	const handleClick = () => {
		setShowConfirmation(false)
	}
	const handleClick2 = () => {
		setShowConfirmation(false)
		setShowOpt(true)
	}
	const handleClick3 = () => {
		setShowOpt(false)
	}

	const handleClick4 = () => {
		setShowOpt(false)
	}

	return (
		<div id='removeapp' className='RemoveApp' style={props.style}>
			<div id='confirmation' style={{ display: showConfirmation ? 'block' : 'none' }}>
				<h1 className='font16'>Confirm</h1>
				<p>Are you sure you want to remove this app?</p>
				<div className='right'>
					<span id='cancel' onClick={handleClick}>
						Cancel
					</span>
					<span id='continue' onClick={handleClick2}>
						Yes
					</span>
				</div>
			</div>

			<div id='verification' className='Verification' style={{ display: showOpt ? 'block' : 'none' }}>
				<p className='title'>Enter OTP to remove this app</p>
				<p>
					OTP code has been sent to your
					<br />
					registered email ID
				</p>
				<div>
					<ReactCodeInput onComplete={handleComplete} />
				</div>
				<span id='cancel2' onClick={handleClick3}>
					Cancel
				</span>
				<span id='validate' onClick={handleClick4}>
					Validate
				</span>

				<p>
					Didn’t receive the code? <a href='#'> Resend Code</a>
				</p>
			</div>
		</div>
	)
}
