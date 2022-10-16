import React, { useState } from 'react'
import RoleItem from './RoleItem'
import './Role.css'
export default function Role() {
	const [show2, setShow2] = useState(false)
	const [newRole, setNewRole] = useState('CEO')
	const [newRoleList, setNewRoleList] = useState([])

	const handleClick2 = () => {
		setShow2(true)
	}
	const handleClick1 = () => {
		setShow2(false)
	}

	const handleChange = (event) => {
		setNewRole(event.target.value)
		console.log(event.target.value)
	}

	const handleClick3 = () => {
		newRoleList.push(newRole)
		setShow2(false)
	}

	return (
		<div className='DashBoard2 Role RoleItem'>
			<h1>Roles</h1>
			<div class='add_new_role' onClick={handleClick2}>
				Add New Role
			</div>

			<div className='add_administrator' style={{ display: show2 === true ? 'block' : 'none' }}>
				<h2>Add New Role </h2>
				<div className='add_admin_content'>
					<select onChange={handleChange} placeholder='Choose a new role'>
						<option value='CEO'>CEO</option>
						<option value='CTO'>CTO</option>
						<option value='CIO/Chief Digital Officer/Chief Innovation Officer'>CIO/Chief Digital Officer/Chief Innovation Officer</option>
						<option value='VP of Product Management/Head of Product'>VP of Product Management/Head of Product</option>
						<option value='Product Manager'>Product Manager</option>
						<option value='VP of Marketing'>VP of Marketing </option>
						<option value='VP of Engineering/Director of Engineering'>VP of Engineering/Director of Engineering</option>
						<option value='Chief Architect'>Chief Architect</option>
						<option value='Software Architect'>Software Architect</option>
						<option value='Engineering Project Manager/Engineering Manager'>Engineering Project Manager/Engineering Manager</option>
						<option value='Technical Lead/Engineering Lead/Team Lead'>Technical Lead/Engineering Lead/Team Lead</option>
						<option value='Principal Software Engineer'>Principal Software Engineer</option>
						<option value='Senior Software Engineer/Senior Software Developer'>Senior Software Engineer/Senior Software Developer</option>
						<option value='Software Engineer'>Software Engineer</option>
					</select>
					<div id='setting-right' className='setting-box '>
						<div className='right flex3'>
							<span id='cancel' onClick={handleClick1}>
								{' '}
								Cancel{' '}
							</span>
							<span id='add' onClick={handleClick3}>
								Add
							</span>
						</div>
					</div>
				</div>
			</div>

			<RoleItem type='Administrators' />
			<RoleItem type='Developers' />
			<RoleItem type='Testers' />
			<RoleItem type='Analytics Users' />

			{newRoleList.map((item) => (
				<RoleItem type={item} />
			))}
		</div>
	)
}
