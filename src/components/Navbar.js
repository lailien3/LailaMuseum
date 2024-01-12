import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import videoNB from '../videos/videoNB.mp4';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    // <>
      <nav className='navbar'>
        <video src={videoNB} autoPlay loop muted />
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick} role="button">
            <i className={click ? 'fas fa-door-open' : 'fas fa-door-closed'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                h o m e
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cats' className='nav-links' onClick={closeMobileMenu}>
                c a t s
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/art' className='nav-links' onClick={closeMobileMenu}>
                a r t
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/code' className='nav-links' onClick={closeMobileMenu}>
                c o d e
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/plants' className='nav-links' onClick={closeMobileMenu}>
                p l a n t s
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/crystals' className='nav-links' onClick={closeMobileMenu}>
                c r y s t a l s
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/game' className='nav-links' onClick={closeMobileMenu}>
                g a m e
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                s i g n u p
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    // </>
  );
}

export default Navbar;
