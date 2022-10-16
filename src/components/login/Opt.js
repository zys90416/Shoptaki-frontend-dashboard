import React, { useState, useEffect } from 'react'
import ReactCodeInput from 'react-verification-code-input'
import PubSub from 'pubsub-js'
import './Opt.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import jwt_token from '../jwt_token'
import configData from "../../config.json"
var qs = require('qs');
var ls = require('localstorage-slim')

export default function Opt(props) {
	let history = useHistory()
	const key = ls.get('key', { decrypt: true })
	const email_opt = ls.get('email_opt', { decrypt: true })
	const otp_expiry_time = ls.get('otp_expiry_time', { decrypt: true })
							
	const [data, setData] = useState('')
	const [code, setCode] = useState('')
	const [email, setEmail] = useState('') // user input
	const redirectUrl = qs.parse(props.location.search, { ignoreQueryPrefix: true }).redirectUrl
	console.log('props='+ JSON.stringify(props))
	console.log("key="+key+", email_opt="+email_opt)
	console.log("redirectUrl="+redirectUrl)

	const headers = {
			'Content-Type': 'application/json',
			//2022-01-21 keith find no need token for verifyOTP and Login
			//'Authorization': 'Bearer '+jwt_token.value 
	}

	const handleClick = () => {
		//2022-01-21 keith find no need token for verifyOTP and Login
		//console.log('Bearer '+jwt_token.value)
		//console.log('props='+ JSON.stringify(props))
		//console.log('otp='+ code + ', data=' + data)
		axios
			.post('http://'+configData.BACKEND_IP+':'+configData.BACKEND_PORT+'/api/auth/verifyOTP', {
				otp: code,
				key: key,
			}, {
				headers: headers
			})

			.then((r) => {
				if (r.status === 200) {
					//console.log("r.status === 200, r.data="+JSON.stringify(r.data))
					console.log("redirectUrl="+redirectUrl)
					//OPT successfully verified so now we make login request with props.redirectUrl
					//Backend creates global session and sends intrmid key
					axios
						.post('http://'+configData.BACKEND_IP+':'+configData.BACKEND_PORT+'/api/auth/login', {
							//email: email_opt,
							otp: code,
							key: key
						}).then((r) => {
							if (r.status === 200) {
								console.log("r.data="+JSON.stringify(r.data))
								//save token at local storage
								ls.set('token', r.data.payload.token, { encrypt: true })
								ls.set('userInfo', r.data.payload.userInfo, { encrypt: true })
								ls.set('logged_in', true)
								console.log("key="+ls.get('key', { decrypt: true })+
									", email_opt="+ls.get('email_opt', { decrypt: true })+
									", otp_expiry_time="+ls.get('otp_expiry_time', { decrypt: true })
								)
								history.push({
								 	pathname: `/home`,
								})
							}else{
								console.log("r.status === "+r.status+".data="+JSON.stringify(r.data))
							}
						})
						// catch error
						.catch((err) => {
							console.log('why err', err)
						})
					// 
				}else{
					console.log("r.status === "+r.status+".data="+JSON.stringify(r.data))
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
		let tail = history.location.state.split('@')[1]
		let a = (history.location.state.slice(0, 2) + '******@' + tail).toLowerCase()
		setEmail(a)
		console.log(history.location.state.toLowerCase())
	}, [])

	return (
		<div className='Verification LoginOpt'>
			<span className='userdetail-text'>Login</span>

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
