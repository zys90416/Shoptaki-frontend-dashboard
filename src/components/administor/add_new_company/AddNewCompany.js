import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../registration/input_field/InputField'
import CountryCode from '../../registration/country_code/CountryCode'
import NewRoleItem from './new_role/NewRoleItem'
import './AddNewCompany.css'
export default function AddNewCompany() {
	const onSubmit = (data) => {
		console.log(data)
		setShowButton(false)
	}
	const [showButton, setShowButton] = useState(true)
	let [id, setId] = useState(1)
	const [newRoleList, setNewRoleList] = useState([])

	const handleClick = () => {
		setId(id++)
		console.log(id++)
	}

	useEffect(() => {
		newRoleList.push({ id: id })
		console.log(newRoleList)
	}, [id, newRoleList])

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	return (
		<div className='AddNewCompany'>
			<h1>Add New Company Details</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex'>
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
						<input style={{ paddingLeft: '74px' }} id='phone-number' type='tel' placeholder='' {...register('Company Contact Number', { required: true, maxLength: 14 })} />
					</div>
				</div>

				<input style={{ display: showButton === true ? 'block' : 'none' }} className='add_new_role' type='submit' value='Add New Role Access' />
			</form>

			<div style={{ marginTop: '15px', display: showButton === true ? 'none' : 'block' }}>
				New Role Access
				<div style={{ border: '1px solid #D9D9D9' }}>
					{newRoleList.map((item) => (
						<NewRoleItem key={item.id} />
					))}

					<input className='add_new_role' onClick={handleClick} style={{ marginBottom: '10px' }} type='submit' value='Add More' />
				</div>
			</div>
		</div>
	)
}
