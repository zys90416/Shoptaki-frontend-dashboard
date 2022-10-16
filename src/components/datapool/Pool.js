import React, { useState, useEffect } from "react";
import "./Pool.css";
import { useHistory } from 'react-router-dom'
export default function Pool() {
  // let history = useHistory();

	const [shade, setShade] = useState('/datapool/pool')
	const handleClick = (path, type) => {
		return () => {
			setShade(path)
			// history.push({ pathname: path })
			// handleChange(type)
		}
	}

  
  return (
    <>
      <div className='Pool'>
            <div className='banner'>
                <div className='image'></div>
                <div className='text'>
                    <div className='title'>Covid-19 Paitents Data Pool 
                      <div className='description'>Data marketplace provides access to US  paitent records associated with COVID-19 More detail descriptions. More detail descriptions. More detail descriptions. More detail descriptions.More detail descriptions. More detail descriptions. More detail descriptions</div>
                      <div className='tags'> 
                          <div className='types'>Semi Public</div>
                          <div className='category'>Health</div>
                      </div>
                    
                    </div>
                </div>
                <div className="access">Get Access</div>
            </div>

            <div className='menu'>
            <div className='overview' onClick={handleClick('overview')} style={{backgroundColor: shade === 'overview' ? '#E3F2FD' : 'white'}} >Overview</div>
              <div className='data'onClick={handleClick('data')} style={{backgroundColor: shade === 'data' ? '#E3F2FD' : 'white'}} >Data</div>
              <div className='providers'onClick={handleClick('providers')} style={{backgroundColor: shade === 'providers' ? '#E3F2FD' : 'white'}} >Contributors</div>
            </div>

            <div className='display'>

            </div>
      </div>
    </>
  );
}
