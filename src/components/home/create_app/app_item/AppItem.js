import React from 'react'
import './AppItem.css'
export default function AppItem(props) {
	function handleClick(event) {
		let items = document.getElementsByClassName('AppItem')
		for (let i = 0; i < items.length; i++) {
			items[i].style.border = '1px solid rgba(0, 0, 0, 0.24)'
		}
		event.currentTarget.style.border = '1px solid #005d9c'
		event.currentTarget.lastChild.checked = 'checked'
	}
	return (
		<div onClick={handleClick} className='AppItem'>
			<div className='pic1'></div>
			<div className='text1'>
				<span id='title' className='font18 weight500'>
					{props.type}
				</span>
				<br />
				<span id='title' className='font14'>
					{props.description}
				</span>
			</div>
			<input type='radio' name='type' />
		</div>
	)
}
