import React, { useState, useEffect } from 'react'
import './SideNavDP.css'
import { useHistory } from 'react-router-dom'
export default function SideNavDP({handleChange}){
	let history = useHistory();

	const [shade, setShade] = useState('/datapool')
	const handleClick = (path, type) => {
		return () => {
			setShade(path)
			history.push({ pathname: path })
			handleChange(type)
		}
	}

	// const onToggle = () =>{

	// }
	

	useEffect(() => {
		// console.log(window.location.pathname)
		if (window.location.pathname === '/datapool') {
			// console.log('22')
			setShade('/datapool')
			handleChange("home")
		} else if (window.location.pathname === '/datapool/category/financial') {
			// console.log('23')
			setShade('/datapool/category/financial')
			handleChange("Financial")
		}else if (window.location.pathname === '/datapool/category/government') {
			// console.log('23')
			setShade('/datapool/category/government')
			handleChange("Government")
		}else if (window.location.pathname === '/datapool/category/health') {
			// console.log('23')
			setShade('/datapool/category/health')
			handleChange("Health")
		}
		// onClick={handleClick('/datapool')}
		// onClick={() => { handleClick('/datapool'); change('datapool'); }}
	}, [])
	return (
        // <div id='side'>
		<div className='SideNavDP'>
			
			<div className='nav'>
				<div className='home' onClick={handleClick('/datapool', 'home')} style={{backgroundColor: shade === '/datapool' ? '#E3F2FD' : 'white'}}>Home <hr className="divider"></hr></div>
				

				<div className='categories'>Categories 
				<hr className="divider"></hr>
					<div className='financial'onClick={handleClick('/datapool/category/financial', 'Financial')} style={{backgroundColor: shade === '/datapool/category/financial' ? '#E3F2FD' : 'white'}}>Financial </div>
					<div className='gov'onClick={handleClick('/datapool/category/government', 'Government')} style={{backgroundColor: shade === '/datapool/category/government' ? '#E3F2FD' : 'white'}}>Government </div>
					<div className='health'onClick={handleClick('/datapool/category/health', 'Health')} style={{backgroundColor: shade === '/datapool/category/health' ? '#E3F2FD' : 'white'}}>Health </div>
				</div>
				{/* click category will expand or collaspese the bottom tabs */}
        	</div> 

			{/* <hr className="divider"></hr> */}

			<div className='tags'>
			{/* <hr className="divider"></hr> */}
				<div className='type'>
					<div className='public'style={{ backgroundColor: 'rgba(126, 204, 124, 0.6)' }}>Public</div>
					<div className='semip'style={{ backgroundColor: 'rgba(134, 205, 215, 0.6)' }}>Semi </div>
					<div className='private'style={{ backgroundColor: 'rgba(215, 134, 134, 0.6)' }}>Private</div>
				</div>

				<div className='cost'>
					<div className='monetized'style={{ backgroundColor: 'rgba(232, 190, 41, 0.66)' }}>Monetized</div>
					<div className='free'style={{ backgroundColor: 'rgba(174, 225, 29, 0.66)' }}>Free</div>
				</div>

			</div>
		</div>
	)
}
