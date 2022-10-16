import React, { useState, useEffect } from 'react'
import './Review.css'
import PubSub from 'pubsub-js'
import { useForm } from 'react-hook-form'
import ReviewItem from './ReviewItem'
export default function Review() {
	useEffect(() => {
		setNewPermissionList([
			{
				id: '1',
				access: 'Human Agent',
				description: "The Human Agent feature allows your app to have a human agent respond to user messages using the human_agent tag within 7 days of a user's message.",
			},
			{
				id: '2',
				access: 'Oembed Read',
				description: 'The oEmbed Read feature allows your app to get embed HTML and basic metadata for public Facebook and Instagram pages, posts, and videos.',
			},
			{
				id: '3',
				access: 'Business Asset User Profile Access',
				description: 'The Business Asset User Profile Access feature allows your app to read the User Fields for users engaging with your business assets such as id, ids_for_business, name',
			},
			{
				id: '4',
				access: 'Page Mentions',
				description: 'The Page Mentioning feature allows your app mention any Facebook Page when publishing posts on the Pages managed by your app.',
			},
			{
				id: '5',
				access: 'Instagram Public Content Access',
				description: "The Instagram Public Content Access feature allows your app to access Instagram Graph API's Hashtag Search endpoints.",
			},
		])

		// componentDidMount
		const token1 = PubSub.subscribe('remove_item_id', (msg, data) => {
			console.log('remove_item_id', data)
			setRemoveId(data)
			console.log(newPermissionList)
			let newList = newPermissionList.filter((element) => {
				if (element.id !== data) {
					return true
				}
			})
			setNewPermissionList(newList)
			console.log(newList)
		})

		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token1) //must unsubscribe
		}
	}, [])
	const [removeID, setRemoveId] = useState()
	const [show2, setShow2] = useState(false)
	const [newPermission, setNewPermission] = useState('Permission1')
	const [newDescription, setDescription] = useState('')
	let [myKey, setMyKey] = useState(5)

	let [newPermissionList, setNewPermissionList] = useState([])
	const handleChange = (event) => {
		setNewPermission(event.target.value)
	}
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
		setDescription(data.description)
		myKey++
		setMyKey(myKey)
		newPermissionList.push({ id: myKey, access: newPermission, description: data.description })
		console.log(newPermissionList)
		setShow2(false)
	}

	const handleClick2 = () => {
		setShow2(true)
	}

	const handleClick1 = () => {
		setShow2(false)
	}

	return (
		<div className='DashBoard2 Role Review'>
			<h1>Permissions and Features</h1>
			<div class='add_new_role' onClick={handleClick2}>
				Add New Permissions and Features
			</div>

			<div className='add_administrator' style={{ display: show2 === true ? 'block' : 'none' }}>
				<h2>Add Permissions and Features </h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='input-wrap'>
						<select placeholder='Choose a Permissions and Features' onChange={handleChange}>
							<option value='Permission1'>Permission1</option>
							<option value='Permission2'>Permission2</option>
							<option value='Permission3'>Permission3</option>
							<option value='Permission4'>Permission4</option>
							<option value='Permission5'>Permission5</option>
						</select>

						<textarea style={{ marginTop: '10px' }} placeholder='Add Description' {...register('description', { required: true })}></textarea>
					</div>

					<div className='add_admin_content'>
						<div id='setting-right' className='setting-box '>
							<div className='right flex5'>
								<span id='cancel' onClick={handleClick1}>
									Cancel
								</span>
								<input id='add' type='submit' value='Add' />
							</div>
						</div>
					</div>
				</form>
			</div>

			<div className='review_dashboard'>
				<div className='flex_review'>
					<div>Permissions and Features</div>
					<div>Access Level ​</div>
					<div>API Calls ​</div>
					<div>App Review Status ​</div>
					<div>Action ​</div>
				</div>

				{newPermissionList.map((item) => (
					<ReviewItem key={item.id} id={item.id} access={item.access} description={item.description} />
				))}
			</div>
		</div>
	)
}
