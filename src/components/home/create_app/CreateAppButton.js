import React from 'react'
import { useHistory } from 'react-router-dom'
import './CreateAppButton.css'
export default function CreateAppButton(props) {
	let history = useHistory()
	const handleClick = () => {
		history.push({
			pathname: `/home/select_app`,
		})
	}
	return (
		<div>
			<div onClick={handleClick} id='create-app-i' style={props.style}>
				Create App
			</div>
		</div>
	)
}
