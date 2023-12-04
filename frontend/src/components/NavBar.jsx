import React from 'react';
import { Link } from 'react-router-dom';
 
function Header() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src='LOGO.png' alt='Logo'></img>
            </div>
            <Link to="/">Accueil</Link>
            <Link to="/about">À Propos</Link>
        </nav>
    )
}

export default Header