import React, { useState, useEffect } from 'react'
import './RoleItem.css'
import { useForm } from 'react-hook-form'
export default function RoleItem(props) {
	const [show, setShow] = useState(false)
	const [show2, setShow2] = useState(true)

	const [data_item, setDataItem] = useState([])

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const handleClick = () => {
		setShow(true)
	}

	const handleClick1 = () => {
		setShow(false)
	}

	const onSubmit = (data) => {
		setShow(false)
		setShow2(false)
		data_item.push(data.name)
	}

	return (
		<div className='RoleItem'>
			<div className='role_item_wrap'>
				<div onClick={handleClick} className='ri_add_admin'>
					Add Administrator
				</div>
				<h2>{props.type}</h2>
				<hr />
				<p style={{ display: show2 === true ? 'block' : 'none' }}> There are no {props.type.toLowerCase()}. </p>
				<div className='flex'>
					{data_item.map((item) => (
						<div>
							<span className='avatar'> </span>
							<span style={{ position: 'relative', top: '-20px', marginLeft: '5px' }}>{item} &nbsp;&nbsp;&nbsp;&nbsp;</span>
						</div>
					))}
				</div>
			</div>

			<div className='add_administrator' style={{ display: show === true ? 'block' : 'none' }}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Add Administrators </h2>
					<div className='add_admin_content'>
						<p>To add someone you aren't friends with on Facebook, enter their fbid or username.</p>

						<input placeholder='Enter the name , fbit or username of the person you want to add' {...register('name', { required: true })} />
					</div>
					<div id='setting-right' className='setting-box '>
						<div className='right flex2'>
							<span id='cancel' onClick={handleClick1}>
								Cancel
							</span>

							<input type='submit' value='submit' id='submit' />
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
