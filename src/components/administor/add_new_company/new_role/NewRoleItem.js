import React, { useState } from 'react'
import InputField from '../../../registration/input_field/InputField'
import { useForm } from 'react-hook-form'
import './NewRoleItem.css'
export default function NewRoleItem() {
	const onSubmit = (data) => {
		console.log(data)
		setClickedAdd(true)
	}
	
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const [clickedAdd, setClickedAdd] = useState(false)

	return (
		<form className='NewRoleItem' onSubmit={handleSubmit(onSubmit)}>
			<div>
				<InputField className='input-field' name='name' />
				<input type='text' {...register('name', { required: true, maxLength: 50 })} />
			</div>
			<div>
				<InputField className='input-field' name='Email Address' />
				<input type='text' {...register('Email Address', { required: true, maxLength: 50 })} />
			</div>
			<div>
				<InputField className='input-field' name='Role' />
				<input type='text' {...register('Role', { required: true, maxLength: 50 })} />
			</div>
			<div>
				<InputField className='input-field' name='Access' />
				<input type='text' {...register('Access', { required: true, maxLength: 50 })} />
			</div>
			<div className='add_new_role_wrap'>
				<input className='add_new_role' type='submit' value={clickedAdd === true ? 'Sent' : 'Add'} style={{ backgroundColor: clickedAdd === true ? '#9D9D9D' : '#005D9C' }} />
			</div>
		</form>
	)
}
