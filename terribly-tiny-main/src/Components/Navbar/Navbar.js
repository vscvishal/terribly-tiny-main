import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className='Navbar-left-side'>
            <div className='Navbar-logo'>ttt</div>
            <div className='Navbar-vertical-line'></div>
            <div className='Navbar-logo-name'>
                S T O R I E S
            </div>
        </div>
        <div className='Navbar-right-side'>
            <button className='Navbar-courses-button'>
                Courses
            </button>
        </div>
    </div>
  )
}

export default Navbar;