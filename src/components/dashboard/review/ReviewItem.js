import React from 'react'
import './ReviewItem.css'
import PubSub from 'pubsub-js'
export default function ReviewItem(props) {
	const handleClick = (event) => {
		console.log(event.currentTarget.id)
		PubSub.publishSync('remove_item_id', event.currentTarget.id)
	}

	return (
		<div className='flex_reviewitem'>
			<div className='description_review'>
				<div className='access'>{props.access}</div>
				<div className='description_re'>{props.description}</div>
				<div className='full_detail_re'>
					<svg style={{ verticalAlign: 'middle' }} width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='7' cy='7' r='6.25' stroke='#9D9D9D' stroke-width='0.5' />
						<path
							d='M6.98438 4.66504C7.29639 4.66504 7.53809 4.41895 7.53809 4.12012C7.53809 3.81689 7.29639 3.5708 6.98438 3.5708C6.67676 3.5708 6.43066 3.81689 6.43066 4.12012C6.43066 4.41895 6.67676 4.66504 6.98438 4.66504ZM6.50977 10H7.45898V5.37695H6.50977V10Z'
							fill='#9D9D9D'
						/>
					</svg>
					Full Description
				</div>
			</div>

			<div className='access_re'>Standard Access</div>
			<div className=''>Ready to Use (0)</div>
			<div>No App Review requested</div>
			<div className='access_re'>Request Advance Access</div>
			<svg id={props.id} onClick={handleClick} className='delete_icon' width='13' height='15' viewBox='0 0 13 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M12.0358 1.9602H9.12549V1.37813C9.12549 0.735269 8.60424 0.213989 7.96135 0.213989H5.05103C4.40814 0.213989 3.88688 0.735269 3.88688 1.37813V1.9602H0.976562V2.54227H1.57627L2.1589 13.6015C2.1589 14.2444 2.68015 14.7657 3.32304 14.7657H9.72575C10.3686 14.7657 10.8899 14.2444 10.8899 13.6015L11.4623 2.54227H12.0358V1.9602H12.0358ZM4.46896 1.37813C4.46896 1.05698 4.73046 0.79606 5.05103 0.79606H7.96135C8.2825 0.79606 8.54342 1.05698 8.54342 1.37813V1.9602H4.46896V1.37813ZM10.3089 13.5714L10.3078 13.5862V13.6015C10.3078 13.9221 10.0469 14.1836 9.72572 14.1836H3.32301C3.00244 14.1836 2.74094 13.9221 2.74094 13.6015V13.5862L2.74038 13.5708L2.1589 2.54227H10.8797L10.3089 13.5714Z'
					fill='#37404D'
				/>
				<path d='M6.79691 3.70636H6.21484V13.0194H6.79691V3.70636Z' fill='#37404D' />
				<path d='M5.06334 13.0007L4.46765 3.70587L3.88672 3.74279L4.48244 13.0376L5.06334 13.0007Z' fill='#37404D' />
				<path d='M9.12906 3.72459L8.54814 3.68823L7.96094 13.0013L8.54186 13.0376L9.12906 3.72459Z' fill='#37404D' />
			</svg>
		</div>
	)
}
