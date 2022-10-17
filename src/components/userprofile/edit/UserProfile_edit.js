import React from 'react'
import '../UserProfile.css'
import {useHistory} from "react-router-dom";
import {Form, FormControl, FormGroup,Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import PubSub from "pubsub-js";
import {useForm} from "react-hook-form";
import InputField from "../../registration/input_field/InputField";
import InputFieldWithNoFlag from "../../registration/input_field/InputFieldWithoutFlag"
import CountryCode from "../../registration/country_code/CountryCode";
import ReCAPTCHA from "react-google-recaptcha";

export default function UserProfile_edit(props) {
	/*ResedentialAddress */
	//for google captcha
	function onChange(value) {
		console.log('Captcha value:', value)
	}
	/*End ResedentialAddress */
	/*UserDetails*/
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
	/*End UserDetails*/
	return (
		<div className='container-fluid'>
			<div className='row justify-content-center'>

				<div className='col-md-8 col-12'>
					<div className='infoForm'>
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

										<InputFieldWithNoFlag name='SmartID' />
										<input type='text' placeholder='SmartID'  />
									</div>
								</div>
								<span className='userdetail-text'>Residential Address</span>
								<hr />
								<div className='address'>
									<InputField className='input-field' name='Address1'/>
									<input type='text'
										   placeholder='Hiranandani Estate, Patlipada' {...register('Address1', {
										required: true,
										maxLength: 50
									})} />
								</div>
								<div className='address'>
									<InputField className='input-field' name='Address2'/>
									<input type='text' placeholder='Ghodbunder Road' {...register('Address2', {
										required: false,
										maxLength: 50
									})} />
								</div>

								<div className='flex'>
									<div>
										<InputField className='input-field' name='Country'/>
										<input type='text' placeholder='India' {...register('Country', {
											required: true,
											maxLength: 50
										})} />

										<InputField className='input-field' name='City'/>
										<input type='text' placeholder='Thane' {...register('City', {
											required: true,
											maxLength: 50
										})} />
									</div>
									<div>
										<InputField className='input-field' name='State'/>
										<input type='text' placeholder='Maharashatra' {...register('State', {
											required: true,
											maxLength: 50
										})} />

										<InputField className='input-field' name='ZipCode'/>
										<input type='text' placeholder='400607' {...register('ZipCode', {
											required: true,
											maxLength: 10
										})} />
									</div>
								</div>
								<input className='next' type='submit' value='Update' />
							</form>
						</div>

					</div>
				</div>
				<div className='col-md-4 col-12'>
					<div className='info_background'>
						<div className='user_pic'>
							<span className='avatar'></span>
						</div>
					</div>
					<div className='blank-area'>
						<Button className='btn_user' type='button'>Upload Image</Button>
					</div>
					<div className='info_background'>
						<Button className='btn_user' type='button'>Create Business Account</Button>
					</div>
				</div>
			</div>
		</div>


	)
}
