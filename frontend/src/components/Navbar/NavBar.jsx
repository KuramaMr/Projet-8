import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={require("../../assets/images/LOGO.png")} alt='Logo' className='logo'/>
            </div>
            <div className='lien'>
            <Link to="/">Accueil</Link>
            <Link to="/About">À Propos</Link>
            </div>
        </nav>
    )
}

export default NavBar