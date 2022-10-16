import React from 'react'
import './NextButton.css'

export default function NextButton(props) {
    
    return (
        <div className='NextButton' style={{ marginTop: '30px', opacity: props.style === 'disabled' ? "0.5" : '1.0', cursor: props.style === 'disabled' ? "not-allowed" : 'pointer' }}>
            <div className='next'>Next</div>
        </div>
    )
}
