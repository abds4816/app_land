import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener("scroll", changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            {/* === Logo === */}
            <a href="#home" className="logo">
                <img src={logo} alt="logo" />
            </a>

            {/* === Toggle Navbar === */}
            <input type="checkbox" className='menu-btn' id="menu-btn" />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className="nav-icon"></span>
            </label>

            {/* === Navbar Links === */}
            <ul className="menu">
                <li><a href='#main' className='active'>Home</a></li>
                <li><a href='#features'>features</a></li>
                <li><a href='#about'>about</a></li>
                <li><a href='#ui'>ui ss</a></li>
                <li><a href='#download'>download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar