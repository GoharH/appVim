import React, { useEffect, useState } from 'react';
import './style.scss';
import logoImg from '../../assets/images/logo-color.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    // toggle brger menu change

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    const [isFixed, setIsFixed] = useState(false);
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

    return <section className={isFixed ? "fixed-header G-flex" : "header-section G-flex"}>
        <div className='logo-section' style={{ backgroundImage: `url(${logoImg})` }}></div>
        <div className='navigation'>
            <div className='navigation-list nav-list-h G-flex'>
                <ul className='nav-list G-flex'>
                    <li>
                        <NavLink to={"/home"}>Home</NavLink >
                    </li>
                    <li>
                        {/* <NavLink to={"/       "}>Features</NavLink > */}
                        <NavLink to={"/terms"}>Terms</NavLink >
                    </li>
                    <li>
                        {/* Drop */}
                        <NavLink to={"/privacy"}>Privacy</NavLink >
                    </li>
                    <li>
                        {/* Preview */}
                        <NavLink to={"/article"}>Article</NavLink >
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink >
                    </li>
                </ul>
                <ul className='nav-list-icons G-flex'>
                    <li>
                        <a href="https://www.facebook.com/">
                            <span className="icon-facebook"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <span className="icon-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <span className="icon-instagram"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="burger-menu-section G-flex">
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>
                <div className={menu_class}>
                    <div className='navigation-list G-flex'>
                        <ul className='nav-list G-flex'>
                            <li>
                                Home
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Drop
                            </li>
                            <li>
                                Preview
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                        <ul className='nav-list-icons G-flex'>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <span className="icon-facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <span className="icon-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <span className="icon-instagram"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Header