import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='nav-items'>
                    <div className='nav-logo'>Nitro<span className='dot'>.</span></div>
                    <div className='nav-menu'>
                        <ul>
                            <NavLink className="navlink" to={"/"}>Home</NavLink>
                            <NavLink className="navlink" to={"/Add"}>Add</NavLink>
                            <NavLink className="navlink" to={"/"}>About Us</NavLink>
                            <NavLink className="navlink" to={"/"}>Portfolio</NavLink>
                            <NavLink className="navlink" to={"/"}>Services</NavLink>
                            <NavLink className="navlink" to={"/"}>Testimonials</NavLink>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar