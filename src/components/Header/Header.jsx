import React from 'react';
import './Header.css';
const ITHS = require ('../../assets/iths.png.jpg');
const LOGO = require ('../../assets/logo.png');
const Header = ()=> {
    return(
        <section className="navbar">
         <img src={ITHS} alt="ITHS" />
        <a href="/watch" className="navbar-item">Watch</a>
        <a href="/weather" className="navbar-item">Weather</a>
        <a href="/traffic" className="navbar-item">Traffic</a>
        <img src={LOGO} alt="LOGO" />
    </section>
    )
}

export default Header