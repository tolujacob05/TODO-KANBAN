import React from 'react';
import '../css/Pop1.css'

const Pop1 = props => {

    
    return (
        <>
           <div className='popup-box'>
                <div className='box'>
                    <span className='close-icon' onClick={props.handleClose}>x</span>
                    {props.content}
                </div>
            </div>

        </>
    )
}

export default Pop1;