import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import SideNav from './side_nav/SideNav'
import UserDetails from './user_details/UserDetails'
import Complete from './complete/Complete'
import './Registration.css'
import ResedentialAddress from './residential_address/ResedentialAddress'
import Verification from './verification/Verification'
import UploadDocuments from './upload_documents/UploadDocuments'
import axios from 'axios'
import PubSub from 'pubsub-js'
import configData from "../../config.json"

export default function Registration() {
	const [phase, setPhase] = useState(0)
	const [showUD, setShowUD] = useState(true)
	const [showRA, setShowRA] = useState(false)
	const [showV, setShowV] = useState(false)
	const [showCD, setShowCD] = useState(false)
	const [skip, setSkip] = useState(false)
	const [showUploadD, setShowUploadD] = useState(false)
	const [emailFull, setEmailFull] = useState('')
	const [data, setData] = useState('')
	
	const [showComplete, setShowComplete] = useState(false)

	const getShowUD = (data) => {
		console.log(data)
		setShowUD(data)
		setShowRA(true)
		setPhase(1)
	}
	
	const getShowRA = (data) => {
		console.log(data)
		setShowRA(data)
		setShowV(true)
		setPhase(2)
	}
	
	const getShowUpload = (data) => {
		console.log(data)
		setShowUploadD(data)
		setShowComplete(true)
		setPhase(4)
	}
	const getShowV = (data) => {
		console.log('clicked', data)
		setShowV(data)
		setShowUploadD(true)
		setPhase(3)
	}
	
	// const getShowCD = (data) => {
		// 	console.log(data)
		// 	setShowCD(data)
		// 	setShowUploadD(true)
		// 	setPhase(4)
		// }
		
	const getShowComplete = (data) => {
		console.log(data)
		setShowComplete(data)
		setPhase(5)
	}
	
	const getSkip = (data) => {
		setSkip(true)
		setShowUploadD(true)
		setPhase(5)
	}

	useEffect(() => {
		// componentDidMount
		const token = PubSub.subscribe('email', (msg, data) => {
			console.log('pubsub', data)
			setEmailFull(data)
		})

		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token) //must unsubscribe
		}
	}, [])

	useEffect(() => {
		// componentDidMount
		const token = PubSub.subscribe('email', (msg, data) => {
			console.log('pubsub', data)
			setEmailFull(data)
		})

		if (showV === true) {
			axios
				.post('http://'+configData.BACKEND_IP+':'+configData.BACKEND_PORT+'/api/auth/requestOTP', {
					email: emailFull,
				})

				.then((r) => {
					if (r.status === 200) {
						console.log(r.data)
						setData(r.data.payload.key)
						PubSub.publishSync('payloadkey', r.data.payload.key)
					} else {
						console.log(r.data)
					}
				})
				// catch error
				.catch((err) => {
					console.log('why err', err)
				})
		}
		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token) //must unsubscribe
		}
	}, [showV])

	return (
		<div className='Registration'>
			<Header content='Login' />

			<div className='content-wrap'>
				<div style={{ width: '21%' }}>
					<SideNav phase={phase} />
				</div>


				<div style={{ width: '79%', display: showUD === true ? 'block' : 'none' }}>
					<div style={{ marginLeft: '34px' }}>
						<UserDetails getShow={getShowUD} />
					</div>
				</div>

				<div style={{ width: '79%', display: showRA === true ? 'block' : 'none' }}>
					<div style={{ marginLeft: '34px' }}>
						<ResedentialAddress getShow={getShowRA} />
					</div>
				</div>

				<div style={{ width: '79%', display: showV === true ? 'block' : 'none' }}>
					<div style={{ marginLeft: '34px' }}>
						<Verification getShow={getShowV} />
					</div>
				</div>

				<div style={{ width: '79%', display: showUploadD === true ? 'block' : 'none' }}>
					<div style={{ marginLeft: '34px' }}>
						<UploadDocuments skip={skip} />
					</div>
				</div>

				<div style={{ width: '79%', display: showComplete === true ? 'block' : 'none' }}>
					<div style={{ marginLeft: '34px' }}>
						<Complete getShow={getShowComplete} />
					</div>
				</div>

			</div>
		</div>
	)
}
