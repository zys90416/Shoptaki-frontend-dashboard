import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Header.css'
import Dropdown from './DropdownForUserProfile'
import avatar from './avatar.png';
import Button from 'react-bootstrap/Button';






// import Dropdown from './Dropdown'
// import { FaCaretDown } from 'react-icons/fa';

export default function Header(props) {
	
	// Comment code has incorrect logic for user that are not login. It should be use for loggin user only
	// const [click, setClick] = useState(false);
  	// const [dropdown, setDropdown] = useState(false);
	// const handleClick = () => setClick(!click);
  	// const closeMobileMenu = () => setClick(false);
	// const onMouseEnter = () => {
   	//  	if (window.innerWidth < 960) {
    //   		setDropdown(false);
    // 	} else {
    //   	setDropdown(true);
    // 	}
  	// };

  	// const onMouseLeave = () => {
    // 	if (window.innerWidth < 960) {
    //   		setDropdown(false);
    // 	} else {
    //   		setDropdown(false);
    // 	}
  	// };
	console.log('Header props='+ JSON.stringify(props))
	const location = useLocation()
	const loginUrl = '/login?redirectUrl='+location.pathname.slice(1);
	const homeUrl = '/home'
	const registerUrl = '/register?redirectUrl='+location.pathname.slice(1);
	const currentPathname = location.pathname.slice(1);
	console.log('Header currentPathname='+ currentPathname)
	const [avatar1, setAvatar] = useState(avatar); // 头像每次都能跟着用户变化
	const [userName, setUsername] = useState("Eason"); // 头像每次都能跟着用户变化
	
	// 生命周期，实时替换用户的登录名和用户头像
	useEffect(()=>{
		// let username1 = localStorage.getItem('userName')
		let avatar1 = localStorage.getItem('avatar')
		// if(username1){
		// 	setUsername(username1)
		// }
		if(avatar1){
			setAvatar('后台服务地址及端口号' + avatar1)
		}
	}, [])


	

	

	return (
		<div className='Header'>
			<div className='logo'></div>
			{(() => {
					if	(props.content === 'Register'){
						return (
							<Link
								to={registerUrl}
							>
								<div className='login'>Register</div>
						</Link>
					)
				} else {
					if (props.content !== 'logined') {
						return (
							<Link
								to={loginUrl}
							>
								<div className='login'>Login</div>
							</Link>
						)
					} else {

						



						return (
							<div className='logined'>
								{/* <svg id='search-svg' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'
										fill='black'
										fill-opacity='0.54'
									/>
								</svg> */}
								{/* <input className='search-bar' placeholder='Search' /> */}
								{/* <div className='right'>
									
								</div> */}
								<Dropdown />
								<Button variant="link" className='button' href='https://www.shoptaki.com/' target='_blank'>Shoptaki Home</Button>
								{/* <span className='avatar'></span> */}
								<img src={avatar1} className='avatar' alt='' />
								
							</div>
						)
					}
				}
			})()}
		</div>


			
			/* <li
            className='Menu'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          	>
				<div>
					<h4>Hello there, User1
            		<FaCaretDown  />
					</h4>   
				</div>
            {dropdown && <Dropdown />}
          	</li>
			<Link
				to={homeUrl}>
			<div className='Logout'><h4>Logout</h4></div>
			</Link>
			<div className='logo'></div>
				{(()  => {
					if (props.content === 'logined' && props.content === 'Register'){
						return (
							<>
							<Link
							to={registerUrl}
							>	
							<div className='register'>Register</div>
							</Link>
							<Link
								to={loginUrl}
							>	
								<div className='login'>Login</div>
							</Link>
							</>
						)
					
					} else if (props.content !== 'Register' && props.content === 'logined') {
						return (
							<div className='logined'>
								<svg id='search-svg' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'
										fill='black'
										fill-opacity='0.54'
									/>
								</svg>

								<input className='search-bar' placeholder='Search' />
								<span className='avatar'></span>
							</div>
						)
					}
				
			})()} */
		// </div>
	)
}
