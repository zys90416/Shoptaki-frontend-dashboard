import React, { useState, useEffect } from 'react'
import CompanyItem from './CompanyItem'
import { useHistory } from 'react-router-dom'
import './CompanyDetails.css'
export default function CompanyDetails() {
	let [newCompnayList, setNewCompanyList] = useState([])
	useEffect(() => {
		setNewCompanyList([
			{
				id: '1',
				name: 'Apple Inc.',
				url: 'apple.com',
				contract: 'Yes',
				type: 'IT & Communications',
			},
			{
				id: '2',
				name: 'Microsoft Corporation',
				url: 'microsoft.com',
				contract: 'Yes',
				type: 'IT & Communications',
			},
			{
				id: '3',
				name: 'Saudi Arabian Oil Co',
				url: 'SaudiarabianoilCo.com	',
				contract: 'Yes',
				type: 'Healthcare',
			},
			{
				id: '4',
				name: 'Amazon.com, Inc.',
				url: 'amazon.com',
				contract: 'Yes',
				type: 'Import/Export',
			},
			{
				id: '5',
				name: 'Alphabet Inc',
				url: 'alphabetinc.com',
				contract: 'Yes',
				type: 'Pharmaceutical',
			},
			{
				id: '6',
				name: 'Facebook Incorporation',
				url: 'facebook.com',
				contract: 'Yes',
				type: 'IT & Communications',
			},
			{
				id: '7',
				name: 'Tencent Holdings Limited',
				url: 'tencentholdingsltd.com',
				contract: 'Yes',
				type: 'IT & Communications',
			},
			{
				id: '8',
				name: 'Berkshire Hathaway Inc.',
				url: 'berkshirehathawayinc.com',
				contract: 'Yes',
				type: 'Healthcare',
			},
			{
				id: '8',
				name: 'Alibaba Group Holding Ltd',
				url: 'alibabagrouphollding.com',
				contract: 'Yes',
				type: 'IT & Communications',
			},
			{
				id: '9',
				name: 'Tesla Inc',
				url: 'tesla.com',
				contract: 'Yes',
				type: 'Healthcare',
			},
		])
	}, [])

	const handleClick2 = () => {
		history.push({ pathname: '/administor/add_new_company' })
	}
	let history = useHistory()

	return (
		<div className='Review CompanyDetails'>
			<h1>Company Details</h1>
			<div className='flex2'>
				<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'
						fill='black'
						fill-opacity='0.54'
					/>
				</svg>

				<input className='search' placeholder='Search organization' />

				<div class='add_new_company' onClick={handleClick2}>
					Add New Company
				</div>
			</div>

			<div className='review_dashboard company_details_wrap'>
				<div className='flex_review'>
					<div>Company Name</div>
					<div>Company URL ​</div>
					<div>Contract ​</div>
					<div>Type of Company ​</div>
					<div>Actions ​</div>
				</div>

				{newCompnayList.map((item) => (
					<CompanyItem key={item.id} id={item.id} name={item.name} url={item.url} contract={item.contract} type={item.type} />
				))}
			</div>
		</div>
	)
}
