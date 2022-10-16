import React from 'react'
import { useHistory } from 'react-router-dom'
import './SubscribedApps.css'
import CreateAppButton from '../create_app/CreateAppButton'
export default function SubscribedApps() {
	const handleClick1 = () => {
		history.push({
			pathname: `/home/social_applications`,
		})
	}
	const handleClick2 = () => {
		history.push({
			pathname: `/home/financial_applications`,
		})
	}
	const handleClick3 = () => {
		history.push({
			pathname: `/home/ecommerce_applications`,
		})
	}
	let history = useHistory()
	return (
		<div className='DashBoard UserDetails'>
			<CreateAppButton style={{ position: 'absolute', right: '0', top: '-60px' }} />

			<div>
				<span className='userdetail-text'>Subscribed Apps</span>
				<hr />
				<div className='document-wrap'></div>
			</div>

			<div className='flex'>
				<div onClick={handleClick1} className='document-wrap subscribed-app'>
					<svg width='36' height='37' viewBox='0 0 36 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M23.667 1.18823H3.2667C2.66553 1.18823 2.08899 1.42704 1.6639 1.85213C1.23881 2.27722 1 2.85377 1 3.45493V17.0551C1 17.6563 1.23881 18.2328 1.6639 18.6579C2.08899 19.083 2.66553 19.3218 3.2667 19.3218H6.66675V23.8552L11.2001 19.3218H23.667C24.2682 19.3218 24.8447 19.083 25.2698 18.6579C25.6949 18.2328 25.9337 17.6563 25.9337 17.0551V3.45493C25.9337 2.85377 25.6949 2.27722 25.2698 1.85213C24.8447 1.42704 24.2682 1.18823 23.667 1.18823Z'
							stroke='black'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M12.333 22.7219C12.333 23.0922 12.333 23.4699 12.333 23.8553C12.3336 26.8609 13.5281 29.7431 15.6537 31.8681L12.333 35.1888H23.6665C26.1613 35.1887 28.5864 34.3654 30.5656 32.8466C32.5448 31.3278 33.9676 29.1984 34.6133 26.7886C35.259 24.3788 35.0916 21.8233 34.1369 19.5184C33.1823 17.2135 31.4938 15.288 29.3333 14.0405'
							stroke='black'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path d='M5.5332 7.98834H21.4001' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
						<path d='M5.5332 12.5217H21.4001' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
					</svg>
					&nbsp;&nbsp;Social Applications
				</div>
				<div onClick={handleClick2} className='document-wrap subscribed-app'>
					<svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M33.6676 31.9945L33.2293 29.4047C33.0965 28.8602 32.6184 28.475 32.0605 28.475H29.6965V13.6531H33.4684V9.57579L17.066 0.703918L0.530859 9.57579V13.6531H4.31602V28.4617H1.93867C1.38086 28.4617 0.916016 28.8469 0.769922 29.4313L0.344922 31.968C0.318359 32.0477 0.318359 32.1406 0.318359 32.2336C0.318359 32.818 0.796484 33.2961 1.39414 33.2961H32.6316C32.7113 33.2961 32.791 33.2828 32.884 33.2695C33.1629 33.2031 33.3887 33.0305 33.5348 32.7781C33.6809 32.5391 33.7207 32.2602 33.6676 31.9945ZM1.87227 12.3117V10.3859L17.066 2.24454L32.127 10.3859V12.3117H1.87227ZM28.3418 13.6531V28.4617H5.65742V13.6531H28.3418ZM1.71289 31.9414L2.07148 29.8031H31.9277L32.2863 31.9414H1.71289Z'
							fill='black'
						/>
					</svg>
					&nbsp;&nbsp;Financial Application
				</div>
				<div onClick={handleClick3} className='document-wrap subscribed-app'>
					<svg width='34' height='30' viewBox='0 0 34 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M6.61867 5.36665L6.14663 2.53331H4.4523C4.19957 1.55865 3.3201 0.833313 2.26667 0.833313C1.0166 0.833313 0 1.84991 0 3.09998C0 4.35005 1.0166 5.36665 2.26667 5.36665C3.3201 5.36665 4.19957 4.64131 4.45287 3.66665H5.18613L5.46947 5.36665H5.44793L8.37817 20.109C6.98133 20.2156 5.81797 21.2911 5.68083 22.6443C5.60037 23.4405 5.86217 24.2378 6.39937 24.8305C6.93713 25.4249 7.70327 25.7666 8.5 25.7666H9.63333C9.63333 27.6417 11.1582 29.1666 13.0333 29.1666C14.9084 29.1666 16.4333 27.6417 16.4333 25.7666H22.6667C22.6667 27.6417 24.1916 29.1666 26.0667 29.1666C27.9418 29.1666 29.4667 27.6417 29.4667 25.7666H31.7333C32.0467 25.7666 32.3 25.5133 32.3 25.2C32.3 24.8866 32.0467 24.6333 31.7333 24.6333H29.2683C28.8003 23.3147 27.544 22.3666 26.0667 22.3666C24.5894 22.3666 23.3331 23.3147 22.865 24.6333H16.235C15.7669 23.3147 14.5106 22.3666 13.0333 22.3666C11.556 22.3666 10.2997 23.3147 9.83167 24.6333H8.5C8.02287 24.6333 7.56387 24.4282 7.23973 24.0706C6.91277 23.7085 6.7592 23.2427 6.8085 22.7582C6.89463 21.9031 7.68457 21.2339 8.60653 21.2339H9.05477C9.0627 21.2339 9.06893 21.2339 9.07687 21.2339H31.1735C32.7324 21.2333 34 19.9657 34 18.4073V5.36665H6.61867ZM2.26667 4.23331C1.64163 4.23331 1.13333 3.72501 1.13333 3.09998C1.13333 2.47495 1.64163 1.96665 2.26667 1.96665C2.8917 1.96665 3.4 2.47495 3.4 3.09998C3.4 3.72501 2.8917 4.23331 2.26667 4.23331ZM26.0667 23.5C27.3167 23.5 28.3333 24.5166 28.3333 25.7666C28.3333 27.0167 27.3167 28.0333 26.0667 28.0333C24.8166 28.0333 23.8 27.0167 23.8 25.7666C23.8 24.5166 24.8166 23.5 26.0667 23.5ZM13.0333 23.5C14.2834 23.5 15.3 24.5166 15.3 25.7666C15.3 27.0167 14.2834 28.0333 13.0333 28.0333C11.7833 28.0333 10.7667 27.0167 10.7667 25.7666C10.7667 24.5166 11.7833 23.5 13.0333 23.5ZM32.8667 18.4073C32.8667 19.3406 32.1073 20.1 31.174 20.1H9.5319L6.8289 6.49998H32.8667V18.4073Z'
							fill='black'
						/>
					</svg>
					&nbsp;&nbsp;Ecommerce Application
				</div>
			</div>
			{/*<div id='no-app'> No apps subscribed yet </div>*/}
		</div>
	)
}
