import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from './fonts_logo/logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
//   const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 1000) {
//       setButton(false);
//     } 

//   };

//   useEffect(() => {
//     showButton();
//     window.addEventListener('resize', showButton);
//   }, []);


  return (
    <>
      <IconContext.Provider value={{ color: 'grey' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
          <img src={logo} className="brand-logo" alt="logo" />
            {/* <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              
            </a> */}
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <a href='https://matildawangelliman.github.io/react-gh-pages/' className='nav-links' id='phone' onClick={closeMobileMenu}>
                 212.555.5555
                </a>
              </li>
              <li className='nav-item'>
                <a href='https://matildawangelliman.github.io/react-gh-pages/' className='nav-links' id='login' onClick={closeMobileMenu}>
                LOGIN
                </a>
              </li>
              {/* <li className='nav-btn'>
                {button ? (
                  <a herf='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </a>
                ) : (
                    <a herf='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    />
                  </a>
                  
                )}
              </li> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
