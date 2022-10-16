import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../registration/input_field/InputField'
import './Setting.css'
export default function Setting() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div className='Setting'>
			<h1>Settings</h1>
			<form class='setting-box' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex'>
					<div>
						<p>App ID </p>
						<input type='text' placeholder='518802205854801' {...register('App ID', { required: true, maxLength: 50 })} />
						<p>Display Name </p>
						<input type='text' placeholder='App for testing' {...register('Display Name', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
						<p>App Domains </p>
						<input type='text' {...register('App Domains', { required: true })} />
						<p>App Domains'Privacy Policy URL</p>
						<input type='text' {...register('Privacy Policy URL', { required: true })} />
						<p>Redirect URL</p>
						<input type='text' {...register('Redirect URL', { required: true })} />
						<p>App Icon(1024 x 1024)</p>
						<div>
							<svg width='257' height='158' viewBox='0 0 257 158' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H255C255.828 0.5 256.5 1.17158 256.5 2V155.067C256.5 155.896 255.828 156.567 255 156.567H2C1.17157 156.567 0.5 155.896 0.5 155.067V2Z'
									fill='#F8F8F8'
									stroke='#DFE0EB'
								/>
								<path
									d='M88.2627 108.658H89.4229V95.9752H88.2451L84.8262 98.3219V99.5436L88.2275 97.2584H88.2627V108.658ZM97.3199 108.86C100.185 108.86 101.908 106.346 101.908 102.33V102.303C101.908 98.2955 100.185 95.7731 97.3199 95.7731C94.4547 95.7731 92.7408 98.2867 92.7408 102.303V102.33C92.7408 106.338 94.4547 108.86 97.3199 108.86ZM97.3199 107.805C95.193 107.805 93.9449 105.696 93.9449 102.33V102.303C93.9449 98.9371 95.193 96.8365 97.3199 96.8365C99.4469 96.8365 100.704 98.9283 100.704 102.303V102.33C100.704 105.687 99.4469 107.805 97.3199 107.805ZM104.048 108.658H112.319V107.586H105.718V107.542L109.111 104.008C111.361 101.688 111.993 100.651 111.993 99.2887V99.2711C111.993 97.3024 110.35 95.7731 108.091 95.7731C105.806 95.7731 104.022 97.3375 103.987 99.4557V99.5348H105.147L105.155 99.4645C105.191 97.9791 106.421 96.8278 108.117 96.8278C109.664 96.8278 110.789 97.8912 110.798 99.3239V99.3414C110.798 100.449 110.35 101.214 108.53 103.103L104.048 107.814V108.658ZM120.066 108.658H121.235V105.793H123.125V104.729H121.235V95.9752H119.477L113.633 104.694V105.793H120.066V108.658ZM114.846 104.729V104.694L120.022 97.0563H120.066V104.729H114.846ZM124.237 108.658H125.546L128.06 104.905H128.086L130.591 108.658H131.901L128.737 104.017L131.936 99.5172H130.618L128.13 103.182H128.095L125.59 99.5172H124.272L127.454 104.061L124.237 108.658ZM136.792 108.658H137.952V95.9752H136.774L133.355 98.3219V99.5436L136.757 97.2584H136.792V108.658ZM145.849 108.86C148.714 108.86 150.437 106.346 150.437 102.33V102.303C150.437 98.2955 148.714 95.7731 145.849 95.7731C142.984 95.7731 141.27 98.2867 141.27 102.303V102.33C141.27 106.338 142.984 108.86 145.849 108.86ZM145.849 107.805C143.722 107.805 142.474 105.696 142.474 102.33V102.303C142.474 98.9371 143.722 96.8365 145.849 96.8365C147.976 96.8365 149.233 98.9283 149.233 102.303V102.33C149.233 105.687 147.976 107.805 145.849 107.805ZM152.577 108.658H160.848V107.586H154.247V107.542L157.64 104.008C159.89 101.688 160.523 100.651 160.523 99.2887V99.2711C160.523 97.3024 158.879 95.7731 156.62 95.7731C154.335 95.7731 152.551 97.3375 152.516 99.4557V99.5348H153.676L153.685 99.4645C153.72 97.9791 154.95 96.8278 156.647 96.8278C158.194 96.8278 159.319 97.8912 159.327 99.3239V99.3414C159.327 100.449 158.879 101.214 157.06 103.103L152.577 107.814V108.658ZM168.596 108.658H169.764V105.793H171.654V104.729H169.764V95.9752H168.007L162.162 104.694V105.793H168.596V108.658ZM163.375 104.729V104.694L168.552 97.0563H168.596V104.729H163.375Z'
									fill='#005D9C'
								/>
							</svg>
						</div>
						<h2>App Purpose</h2>
						<p>This app's primary purpose is to access and use data from Facebook's Platform on behalf of:</p>
						<input type='radio' name='purpose2' /> <label>Yourself or your own business</label>
						<br />
						<input type='radio' name='purpose2' /> <label>Clients</label>
						<p>
							If you are developing an app that accesses and uses data from Facebook's Platform on behalf of clients, you are subject to <a href='#'>Section 5b of the Platform Terms</a>.
						</p>
					</div>
					<div>
						<p>App ID</p>
						<input type='text' placeholder='App ID' {...register('App ID', { required: true, maxLength: 20 })} />

						<p>Namespace</p>
						<input type='text' placeholder='Namespace' {...register('Namespace', { required: true, maxLength: 14 })} />

						<p>Contact Email</p>
						<input type='email' placeholder='yeligetipooja@gmail.com' {...register('Contact Email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />

						<p>Terms of Service URL</p>
						<input type='text' placeholder='Namespace' {...register('Terms of Service URL', { required: true, maxLength: 14 })} />

						<p>Category </p>
						<input type='text' placeholder='Choose a category' {...register('Category', { required: true, maxLength: 14 })} />
					</div>
				</div>
			</form>

			<div class='setting-box'>
				<h2>Verification</h2>
				<p>Some permissions and features require business or individual verification to access certain types of data. You can start the verification process at any time.</p>
			</div>

			<div class='setting-box'>
				<h2>Data Protection Officer Contact Information</h2>
				<p>
					The General Data Protection Regulation (GDPR) requires certain companies doing business in the European Union to designate a Data Protection Officer who people can contact for
					information about how their data is being processed. This contact information will be available to people on Facebook along with other information about your app or website. Learn
					More.
				</p>

				<p>Name (optional) </p>
				<input type='text' {...register('Name (optional)', { required: true })} />

				<p>Email </p>
				<input type='email' {...register('Email', { required: true })} />

				<h2>Address</h2>

				<p>Street Address </p>
				<input type='text' {...register('Street Address', { required: true })} />

				<p>Apt/Suite/Other (Optional) </p>
				<input type='text' {...register('Apt/Suite/Other (Optional)', { required: true })} />

				<p>City/District </p>
				<input type='text' {...register('City/District', { required: true })} />

				<div className='flex'>
					<div>
						<p>State/Province/Region </p>
						<input type='text' {...register('State/Province/Region', { required: true })} />
					</div>

					<div>
						<p>ZIP/Postal Code </p>
						<input type='text' {...register('ZIP/Postal Code', { required: true })} />
					</div>
				</div>
			</div>

			<div id='setting-right' className='setting-box '>
				<div className='right'>
					<span id='cancel'> Discard </span>
					<span id='continue'>Save Changes</span>
				</div>
			</div>
		</div>
	)
}
