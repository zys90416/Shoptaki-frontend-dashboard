import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import ReactCodeInput from 'react-verification-code-input'
import axios from 'axios'
import jwt_token from '../../jwt_token'
import configData from "../../../config.json"

import './Verification.css'

export default function Verification(props) {
	const [showV, setShowV] = useState(false)
	const [emailFull, setEmailFull] = useState('')
	const [email, setEmail] = useState('')
	const [code, setCode] = useState('')
	const [data, setData] = useState('')

	const headers = {
  		'Content-Type': 'application/json',
  		'Authorization': 'Bearer '+jwt_token.value 
	}

	const handleClick = () => {
		axios
			.post('http://'+configData.BACKEND_IP+':'+configData.BACKEND_PORT+'/api/auth/verifyOTP', {
				otp: code,
				key: data,
			}, {
			    	headers: headers
  			   })

			.then((r) => {
				if (r.status === 200) {
					console.log(r.data)
					setShowV(false)
					props.getShow(false)
				}
			})
			// catch error
			.catch((err) => {
				console.log('why err', err)
			})
	}

	const handleComplete = (data) => {
		console.log(data)
		setCode(data)
	}

	useEffect(() => {
		// componentDidMount
		const token = PubSub.subscribe('email', (msg, data) => {
			console.log('pubsub', data)
			setEmailFull(data)
			let tail = data.split('@')[1]
			let a = data.slice(0, 2) + '******@' + tail
			setEmail(a)
		})
                const token1 = PubSub.subscribe('payloadkey', (msg, data) => {
                        console.log('payloadkey is'+data)
                        setData(data)
                })

		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token) //must unsubscribe
		}
	}, [])

	
	return (
		<div className='Verification'>
			<span className='userdetail-text'>Verification</span>

			<hr />
			<p className='title'>Please enter the One-Time Password to verify your account</p>
			<p>
				OTP code has been sent to your
				<br />
				registered email ID {email}
			</p>

			<div>
				<ReactCodeInput fields={5} onComplete={handleComplete} />
			</div>

			<input className='next' type='submit' value='Validate' onClick={handleClick} />

			<p>
				Didn’t receive the code? <a href='#'> Resend Code</a>
			</p>
		</div>
	)
}
