import React from 'react'
import './style.scss'

function Welcome() {
    return (
        <div className='welcome'>
            <div className='welcome-items'>
                <div className='welcome-texts'>
                    <div className='welcome-welcome'>WELCOME</div>
                    <div className='welcome-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</div>
                </div>
                <div className='welcome-button'>
                    <button className='get-btn'>Get In Touch</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome