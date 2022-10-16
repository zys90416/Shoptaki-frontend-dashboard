import React, { useState, useEffect } from 'react'
import HomeDP from './HomeDP'
import SideNav from './SideNavDP'
import './DataPool.css'
export default function DataPool() {
// a function to change the current right display datapool page
//basically different signal a different get/post method to get the specifc catgories of datapools to display
const [display, setDisplay] = useState('datapool'); 

const handleChange = (type) =>{
    setDisplay(type);
    console.log(type)
}
return (
    <div className='DataPool'>
    <SideNav handleChange={handleChange}/>
    <HomeDP display={display}/> 
    </div>
    )
}
