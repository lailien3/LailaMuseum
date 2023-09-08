import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    |_l_a_i_l_a_| <i className='fa-solid fa-ghost' />
                </Link>

            </div>
        </nav>
    
    </>
  )
}

export default Navbar
