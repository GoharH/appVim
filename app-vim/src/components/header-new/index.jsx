import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const HeaderNew = () => {
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
    };

    return (
        <header>
            <div className="logo">
                <h1>Your Website Name</h1>
            </div>
            <nav className={`menu ${open ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-icon" onClick={handleMenuClick}>
                <div className={`menu-icon__line ${open ? 'active' : ''}`}></div>
                <div className={`menu-icon__line ${open ? 'active' : ''}`}></div>
                <div className={`menu-icon__line ${open ? 'active' : ''}`}></div>
            </div>
        </header>
    );
};

export default HeaderNew 
