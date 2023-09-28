import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import videoNB from '../videos/videoNB.mp4';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      <video src={videoNB} autoPlay loop muted/>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  Laila's Website
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                h o m e
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cats'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                c a t s
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/art'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                a r t
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/code'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                c o d e
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/plants'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                p l a n t s
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/game'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                g a m e
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;