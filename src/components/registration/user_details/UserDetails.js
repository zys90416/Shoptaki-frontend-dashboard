import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import { useForm } from 'react-hook-form'
import InputField from '../input_field/InputField'
import './UserDetails.css'
import CountryCode from '../country_code/CountryCode'
import axios from 'axios'

export default function UserDetails(props) {
	useEffect(() => {
		// componentDidMount
		const token = PubSub.subscribe('country_code', (msg, data) => {
			console.log('pubsub', data)
			setCountry(data)
		})
		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token) //must unsubscribe
		}
	}, [])

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
		//change phone number by add country code
		data['Phone Number'] = `+(${country})${data['Phone Number']}`

		setShowUD(!showUD)
		props.getShow(!showUD)
		setEmail(data.Email)
		PubSub.publishSync('email', data.Email)
		PubSub.publishSync('user_details', data)
	}
	console.log(watch('example')) // watch input value by passing the name of it
	const [country, setCountry] = useState('1')
	const [showUD, setShowUD] = useState(true)
	const [email, setEmail] = useState('')

	return (
		<div className='UserDetails'>
			<span className='userdetail-text'>User Details</span>

			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex'>
					<div>
						<InputField className='input-field' name='First Name' />
						<input type='text' placeholder='First name' {...register('First name', { required: true, maxLength: 20 })} />

						<InputField className='input-field' name='Email Address' />
						<input type='email' placeholder='Email' {...register('Email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />

						<InputField className='input-field' name='Date of Birth' />
						<input type='date' max="2022-03-16" min="1901-01-01" step="1" {...register('Date of Birth', { required: true })} />
					</div>
					<div>
						<InputField className='input-field' name='Last name' />
						<input type='text' placeholder='Last name' {...register('Last name', { required: true, maxLength: 20 })} />

						<CountryCode page='user_details' />
						<InputField className='input-field' name='Phone Number' />
						<input id='phone-number' type='tel' placeholder='Phone Number' {...register('Phone Number', { required: true, maxLength: 14 })} />
					</div>
				</div>
				<input className='next' type='submit' value='Next' />
			</form>
		</div>
	)
}
