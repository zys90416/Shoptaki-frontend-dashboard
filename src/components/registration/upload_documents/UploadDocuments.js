import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import './UploadDocument.css'

export default function UploadDocuments(props) {
	const [ud, setUD] = useState('')
	const [cd, setCD] = useState('')
	const [ra, setRA] = useState('')
	useEffect(() => {
		// componentDidMount
		const token1 = PubSub.subscribe('user_details', (msg, data) => {
			console.log('user_details', data)
			setUD(data)
		})
		const token2 = PubSub.subscribe('company_details', (msg, data) => {
			console.log('company_details', data)
			setCD(data)
		})
		const token3 = PubSub.subscribe('residential_address', (msg, data) => {
			console.log('residential_address', data)
			setRA(data)
		})

		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token1) //must unsubscribe
			PubSub.unsubscribe(token2) //must unsubscribe
			PubSub.unsubscribe(token3) //must unsubscribe
		}
	}, [])
	const [checked, setChecked] = useState(false)
	const handleClick = () => {
		setChecked(true)
	}

	const handleClick2 = () => {
		if (checked === true) {
			alert('user details: ' + JSON.stringify(ud) + '\n\ncompany details: ' + JSON.stringify(cd) + '\n\nresidential address: ' + JSON.stringify(ra))
		} else {
			alert('please check the button')
		}
	}

	return (
		<div className='UserDetails UploadDocuments' style={{ height: '530px' }}>
			<span className='userdetail-text'>Upload Documents</span>
			<hr />
			<div className='document-wrap'>
				<span className='driver'>Driver License </span>
				<input className='scan' type='button' value='Scan' />
				<input className='upload' type='button' value='Upload' />
			</div>
			<hr />
			<div className='document-wrap'>
				<span className='driver'>Passport/International ID </span>
				<input className='scan' type='button' value='Scan' />
				<input className='upload' type='button' value='Upload' />
			</div>
			<hr style={{ display: props.skip === false ? 'block' : 'none' }} />
			<div className='document-wrap' style={{ display: props.skip === false ? 'block' : 'none' }}>
				<span className='driver'>Company Document </span>
				<input className='scan' type='button' value='Scan' />
				<input className='upload' type='button' value='Upload' />
			</div>
			<div className='agree'>
				<input type='checkbox' onClick={handleClick} />
				<lable>
					Agree to our{' '}
					<a href='#' style={{ color: '#005d9c' }}>
						Terms & Conditions
					</a>
				</lable>
			</div>
			<input className='next' type='submit' value='Next' onClick={handleClick2} />
		</div>
	)
}
