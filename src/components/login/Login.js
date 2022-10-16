import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header/Header'
import PubSub from 'pubsub-js'
import Opt from './Opt'
import axios from 'axios'
import './Login.css'
import InputField from '../registration/input_field/InputField'
import configData from "../../config.json"
var qs = require('qs');
var ls = require('localstorage-slim')

export default function Login(props) {
	let history = props.history
	let warningMsg = ''
	const [show, setShow] = useState(true)
	const [style, setStyle] = useState('disabled')
	const [opt, setOpt] = useState(true)
	const [input, setInput] = useState('')
	const [data, setData] = useState('')
	const redirectUrl = qs.parse(props.location.search, { ignoreQueryPrefix: true }).redirectUrl
	console.log("redirectUrl="+redirectUrl)
	console.log("props="+JSON.stringify(props))
	//need to add code to check if redirectURl is null

	useEffect(() => {

		if (validateEmail(input)) {
			setStyle('abled')
		} else {
			setStyle('disabled')
		}
	}, [input])

	function validateEmail(elementValue) {
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
		return emailPattern.test(elementValue)
	}



	const handleClick = () => {

		if (style === 'abled') {
			if (opt === true) {
				let tail = input.split('@')[1]
				let a = input.slice(0, 2) + '******@' + tail
				setShow(false)
				axios.post('http://'+configData.BACKEND_IP+':'+configData.BACKEND_PORT+'/api/auth/requestOTP', {
						email: input
					})

					.then((r) => {
						if (r.status === 200) {
							console.log(r.data)
							console.log('payload key is:'+r.data.payload.key)
							ls.set('key', r.data.payload.key, { encrypt: true })
							ls.set('email_opt', input, { encrypt: true })
							ls.set('otp_expiry_time', r.data.payload.otp_expiry_time, { encrypt: true })
							console.log("key="+ls.get('key', { decrypt: true })+
								", email_opt="+ls.get('email_opt', { decrypt: true })+
								", otp_expiry_time="+ls.get('otp_expiry_time', { decrypt: true })
							)
							setData(r.data.payload.key)
							PubSub.publishSync('email_opt', input)
							history.push({
								pathname: `/login/opt`,
								search: '?redirectUrl='+redirectUrl,
								state: input
							})
							console.log("history="+JSON.stringify(history))
						} else {
							console.log(r.data)
						}
					})
					// catch error
					.catch((err) => {
						console.log('why err', err)
						
						if(err.response.status === 404){
							//no this user return back to login page
							
							var x = document.getElementById("warningMsg");
							x.innerHTML = "Login failed, please check the input and try again."
						
						}else{
							//should add some more code here for specific error handling
							var x = document.getElementById("warningMsg");
							x.innerHTML = "System failure, please try again later."
						
						}
						setShow(true)
					})
				
			}
		}
	}

	return (
		<div className='Login'>
			<div className='login-wrap' style={{ display: show ? 'block' : 'none' }}>
				<div className='login-content'>
					<span className='login-text'>Login</span>
					<hr />
					<label id='warningMsg' className='login-text-warning'> </label>
					<InputField name='Email Address' />
					<input
						className='field'
						onInput={(e) => {
							setInput(e.target.value.trim())
						}}
					/>

					<div className='verify-selection'>
						<span>
							<input type='radio' id='opt' name='verifyby' value='opt' checked />
							<label> Verify using OPT</label>
						</span>

						<span>
							<input type='radio' id='biometrics' name='verifyby' value='biometrics' />
							<label> Verify using Biometrics</label>
						</span>
					</div>
				</div>

				<div onClick={handleClick} className='continue' style={{ opacity: style === 'disabled' ? '0.5' : '1.0', cursor: style === 'disabled' ? 'not-allowed' : 'pointer' }}>
					Continue
				</div>
			</div>
		</div>
	)
}
