import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {showButton()}, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    L A I L A <i className='fas fa-ghost'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/code' className='nav-links' onClick={closeMobileMenu}>
                            Code
                        </Link>
                    </li>

                    {/* <li className='nav-item'>
                        <Link to='/art' className='nav-links' onClick={closeMobileMenu}>
                            Art
                        </Link>
                    </li> */}

                    {/* <li className='nav-item'>
                        <Link to='/cats' className='nav-links' onClick={closeMobileMenu}>
                            Cats
                        </Link>
                    </li> */}

                    <li className='nav-item'>
                        <Link to='/subscribe' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Subscribe!
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Subscribe</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
