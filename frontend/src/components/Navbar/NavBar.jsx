import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
 
function Header() {
    return (
        <body>
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={require("../../assets/images/LOGO.png").default} alt='Logo' />
            </div>
            <div className='lien'>
            <Link to="/">Accueil</Link>
            <Link to="/about">À Propos</Link>
            </div>
        </nav>
        </body>
    )
}

export default Header