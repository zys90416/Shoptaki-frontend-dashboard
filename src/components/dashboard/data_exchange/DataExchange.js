import React, { useState, useEffect } from 'react'
import './DataExchange.css'
import { Link, Redirect} from 'react-router-dom'
import { items } from "./PoolItems";


export default function DataExchange() {
	return (
		<div className='DataExchange'>

			<h1>Subscriptions</h1>
            <div className='table'>
                <div className='row'  style={{gap: '45%'}}>
					<div>Subscribed Pools</div>
					<div>API Keys​</div>
				</div>
				{items.map((item) => (
					<div className='row' style={{gap: '0%'}}>
					<div className='name'>{item.name}</div>
					<div className='key'>{item.key}</div>
                    <div className='copy'>copy</div>
				</div>
				))}
			</div>
            <h1 style={{marginTop: '125px'}}>Data Pools</h1>
            <div className='datapools'>
                <div className='filter' style={{borderBottom:'1px solid rgb(225, 222, 222)', paddingTop:'15px', paddingBottom:'10px', paddingLeft:'970px'}} >
                    <svg width='22' height='22' viewBox='0 0 26 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M1 0h22l-9 15.094v8.906l-4-3v-5.906z'
								fill='grey'
							/>
					</svg>{' '}
                </div>

                {items.map((item) => (
					<div className='cards'>
                        <div className='image'></div>
                        <div className='text'>
                        <Link
			            to={{pathname: `/datapool/pool`,}}>
                            <div className='title'>{item.name} 
                                <div className='description'>More detail descriptions. More detail descriptions. More detail descriptions. More detail descriptions.More detail descriptions. More detail descriptions. More detail descriptions</div>
                            </div>
                        </Link>
                            <div className='tags'> 
                                <div className='types'>Semi Public</div>
                                <div className='category'>Health</div>
                            </div>
                        </div>

                        <div className="notification">
                            <svg style={{paddingRight:'100%', paddingLeft:'26%'}} width='36' height='38' viewBox='0 0 26 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
							    <path
								d='M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm1 15h-2v-6h2v6zm-1-7.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z'
								fill='grey'
							    />
					        </svg>{' '}
                            Awaiting Response
                        </div>

                        <div className="menu">
                            <svg width='36' height='38' viewBox='0 0 26 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
							    <path
								d='M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z'
								fill='rgb(164, 161, 161)'
							    />
					        </svg>{' '}
                            
                        </div>
                    </div>
				))}
            </div>
		</div>
	)
}
