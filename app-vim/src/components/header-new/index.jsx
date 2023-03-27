import React, { useEffect, useState } from 'react';
import './style.scss';
import logoImg from '../../assets/images/logo-color.svg';
import NavigationList from './navigation-list';
import NavSocialIcon from './nav-icon/insex';

const HeaderNew = () => {
    const [isFixed, setIsFixed] = useState(false);

    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
    };
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <header className={isFixed ? "fixed-header" : ""}>

        <div className='logo-section' style={{ backgroundImage: `url(${logoImg})` }}></div>

        <div className='nav-list'>
            <NavigationList className='nav' />
            <NavSocialIcon />
        </div>
        <nav className={`menu ${open ? 'active' : ''}`} onClick={handleMenuClick}>
            <NavigationList className='nav-burger' />
            <NavSocialIcon />
        </nav>
        <div className="menu-icon" onClick={handleMenuClick}>
            <div className={`menu-icon__line ${open ? 'active' : ''}`}></div>
            <div className={`menu-icon__line ${open ? 'active' : ''}`}></div>
            <div className={`menu-icon__line ${open ? 'active' : ''}`}></div>
        </div>
    </header>

};

export default HeaderNew 
