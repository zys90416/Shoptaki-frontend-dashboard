import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PubSub from 'pubsub-js'
import { useHistory } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import InputField from '../input_field/InputField'
import './ResidentialAddress.css'
import axios from 'axios'
import jwt_token from '../../jwt_token'
import configData from "../../../config.json"

export default function ResedentialAddress(props) {
	let history = useHistory()
	const [showRA, setShowRA] = useState(false)
	const [udData, setUdData] = useState('')
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	console.log(watch('example'))

	//for google captcha
	function onChange(value) {
		console.log('Captcha value:', value)
	}

	const headers = {
  		'Content-Type': 'application/json',
  		//'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJUZXJyeV9DaGFuIiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDIxMzMxNjYsImV4cCI6MTY0NDcyNTE2Nn0.p7mImHr1UrkO2j7okmE97p0mr0oiqZTPCbBUGR1M2XA'
		'Authorization': 'Bearer '+jwt_token.value 
	}

	const onSubmit = (data) => {
		console.log(data)
                console.log(jwt_token.value)
		PubSub.publishSync('residential_address', data)

		axios
			.post('http://'+configData.BACKEND_IP+':'+configData.BACKEND_PORT+'/api/users/insertUser', {
				first_name: udData['First name'],
				last_name: udData['Last name'],
				emails: [udData['Email']],
				phone_number: [udData['Phone Number']],
				piiInfo: { dob: udData['Date of Birth'] },
			}, {
			    	headers: headers
  			   })

			.then((r) => {
				if (r.status === 200) {
					//console.log(r)
					setShowRA(false)
					props.getShow(false)
				}
			})
			// catch error
			.catch((err) => {
				console.log('why err', err)
				history.push({
					pathname: `/login`,
				})
			})
	}

	useEffect(() => {
		// componentDidMount
		const token1 = PubSub.subscribe('user_details', (msg, data) => {
			//console.log('user_details', data)
			setUdData(data)
		})

		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token1) //must unsubscribe
		}
	}, [])
	return (
		<div className='ResidentialAddress'>
			<span className='userdetail-text'>Residential Address</span>

			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='address'>
					<InputField className='input-field' name='Address1' />
					<input type='text' placeholder='Hiranandani Estate, Patlipada' {...register('Address1', { required: true, maxLength: 50 })} />
				</div>
				<div className='address'>
					<InputField className='input-field' name='Address2' />
					<input type='text' placeholder='Ghodbunder Road' {...register('Address2', { required: false, maxLength: 50 })} />
				</div>

				<div class='flex'>
					<div>
						<InputField className='input-field' name='Country' />
						<input type='text' placeholder='India' {...register('Country', { required: true, maxLength: 50 })} />

						<InputField className='input-field' name='City' />
						<input type='text' placeholder='Thane' {...register('City', { required: true, maxLength: 50 })} />
						<div className='captcha-wrap'>
							<InputField className='input-field' name='Captcha' />
							<ReCAPTCHA className='captcha' sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onChange={onChange} />
						</div>
					</div>
					<div>
						<InputField className='input-field' name='State' />
						<input type='text' placeholder='Maharashatra' {...register('State', { required: true, maxLength: 50 })} />

						<InputField className='input-field' name='ZipCode' />
						<input type='text' placeholder='400607' {...register('ZipCode', { required: true, maxLength: 10 })} />
					</div>
				</div>
				<input className='next' type='submit' value='Next' />
			</form>
		</div>
	)
}