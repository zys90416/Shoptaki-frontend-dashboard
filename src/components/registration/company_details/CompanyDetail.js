import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PubSub from 'pubsub-js'
import InputField from '../input_field/InputField'
import './CompanyDetails.css'
import CountryCode from '../country_code/CountryCode'

export default function CompanyDetails(props) {
	const [countryforCompany, setCountryForCompany] = useState('1')
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		// componentDidMount
		const token = PubSub.subscribe('country_code_for_company', (msg, data) => {
			console.log('pubsub com', data)
			setCountryForCompany(data)
		})
		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token) //must unsubscribe
		}
	}, [])

	const onSubmit = (data) => {
		console.log(data)
		//change Company Contact phone number by add country code
		data['Company Contact Number'] = `+(${countryforCompany})${data['Company Contact Number']}`

		setShowCD(false)
		props.getShow(false)
		PubSub.publishSync('company_details', data)
	}
	console.log(watch('example')) // watch input value by passing the name of it

	const handleClick = () => {
		props.getSkip(false)
	}
	const [showCD, setShowCD] = useState(false)

	return (
		<div className='UserDetails CompanyDetails' style={{ height: '600px' }}>
			<span className='userdetail-text'>Do you want to register using your company details?</span>
			<span id='skip' onClick={handleClick}>
				Skip
			</span>
			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<div class='flex'>
					<div>
						<InputField className='input-field' name='Job Title' />
						<input type='text' placeholder='Designer' {...register('Job Title', { required: true, maxLength: 50 })} />

						<InputField className='input-field' name='Company Email' />
						<input
							type='email'
							placeholder='Jpmorganqueries@jpsupport.com'
							{...register('Company Email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
						/>

						<InputField className='input-field' name='Company Type' />
						<input type='text' placeholder='IT & Communications' {...register('Company Type', { required: true, maxLength: 50 })} />

						<InputField className='input-field' name='Company Contact Type' />
						<input type='text' {...register('Company Contact Type', { required: true })} />
					</div>
					<div>
						<InputField className='input-field' name='Company Name' />
						<input type='text' placeholder='J P Morgan' {...register('Compnay Name', { required: true, maxLength: 50 })} />

						<InputField className='input-field' name='Company URL' />
						<input type='text' placeholder='JPMorgan.com' {...register('Compnay URL', { required: true, maxLength: 50 })} />

						<CountryCode page='company_details' />
						<InputField className='input-field' name='Company Contact Number' />
						<input id='phone-number' type='tel' placeholder='' {...register('Company Contact Number', { required: true, maxLength: 14 })} />
					</div>
				</div>
				<input className='next' type='submit' value='Next' />
			</form>
		</div>
	)
}
