import React, { useState, useEffect } from 'react'
import './AppBox.css'
import PubSub from 'pubsub-js'
import { useHistory } from 'react-router-dom'
import RemoveApp from '../remove_app/RemoveApp'
export default function AppBox(props) {
	let history = useHistory()
	const [show, setShow] = useState(false)
	const [show2, setShow2] = useState(false)
	const handleClick = (event) => {
		setShow(!show)
	}

	const handleClick2 = (event) => {
		setShow(!show)
		setShow2(!show2)
	}

	useEffect(() => {
		console.log(AppBox)
		if (props.app_name === 'Facebook') {
			document.getElementById('picture').style.backgroundImage = 'url(facebook-logo.png)'
		} else if (props.app_name === 'Twitter') {
			document.getElementById('picture').style.backgroundImage = 'url(Twitter_logo.png)'
		} else if (props.app_name === 'Instagram') {
			document.getElementById('picture').style.backgroundImage = 'url(Instagram_logo.png)'
		}

		if (props.admin === 'true') {
			let arr = [...document.getElementsByClassName('subscribed-app')]
			arr.forEach((element) => {
				element.style.borderBottomLeftRadius = '0'
				element.style.borderBottomRightRadius = '0'
			})
		}
	}, [])
	return (
		<div id='appbox-wrap' style={{ textAlign: 'left' }}>
			<div className='document-wrap subscribed-app AppBox'>
				<div id='picture'></div>
				<div>
					<span className='font16 bold'> {props.app_name} </span>
					<br />
					App ID: {props.app_id}
					<br />
					Type: {props.app_type}
				</div>
			</div>

			{(() => {
				if (props.admin === 'true') {
					return (
						<div className='administrator-box'>
							<span className='noselect'> Administrator</span>
							<svg onClick={handleClick} id='dot' width='20' height='4' viewBox='0 0 20 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<g opacity='0.5'>
									<circle cx='2' cy='2' r='2' fill='black' />
									<circle cx='10' cy='2' r='2' fill='black' />
									<circle cx='18' cy='2' r='2' fill='black' />
								</g>
							</svg>

							<div onClick={handleClick2} id='remove' style={{ display: show === true ? 'block' : 'none' }}>
								Remove App
							</div>
						</div>
					)
				}
			})()}
			<RemoveApp style={{ display: show2 ? 'block' : 'none' }} />
		</div>
	)
}
