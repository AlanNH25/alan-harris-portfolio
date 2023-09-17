 import React, {useState} from 'react' 
 import {Link} from 'react-router-dom'
 import './Navbar.css';
 
 function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick (){
    setClick(!click);
  }

  function closeMobileMenu(){
    setClick(false);
  }

   return (
    <>
        <nav className = 'navbar'>
          <div className = "navbar-container">
            <div class = "navbar-name-container">
            <Link to = "/" className="navbar-name">
              <h1 className="navbar-name-text">Alan Harris</h1>
            </Link>
            <h2 className="navbar-title">
              Digital Artist
            </h2>
            </div>
            <div className = 'menu-icon' onClick = {handleClick}>
              <i className = {click ? 'fa fa-xmark' : 'fa fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
              <li className = 'nav-item'>
                <Link to = '/artwork' className = 'nav-links' onClick={closeMobileMenu}>
                  Art Peices
                </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = '/drawings' className = 'nav-links' onClick={closeMobileMenu}>
                  Drawings
                </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = '/concepts' className = 'nav-links' onClick={closeMobileMenu}>
                  Concept Art
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
   )
 }
 
 export default Navbar
 