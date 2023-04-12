import React from "react";
import './style.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return <section className="footer-section">
        <div className="G-container">
            <div className="footer-list">
                <div className="G-padding-25">
                    <div className="footer-box">
                        <h3>About AppVim</h3>
                        <p>
                            We're passionate about designing and developing one of the best marketing apps in the market
                        </p>
                    </div>
                </div>
                <div className="G-padding-25">
                    <div className="footer-box">
                        <h3>Value Links</h3>
                        <ul className="footer-links">
                            <li>
                                <NavLink to="/terms" target='_blank' rel='noreferrer'>Terms & Conditions</NavLink>
                                {/* rel = ”noopener” — это атрибут HTML, который добавляется ко всем ссылкам WordPress, выбранным для открытия на новой вкладке браузера. 
                                Он также сопровождается атрибутом rel = ”noreferrer”. Эта функция введена в WordPress для устранения уязвимости безопасности, 
                                которая может быть использована вредоносными веб-сайтами. */}
                                {/* <a href="">Terms & Conditions</a> */}
                            </li>
                            <li>
                                <NavLink to="/privacy" target='_blank' rel='noreferrer'>Privacy Policy</NavLink>
                                {/* <a href="#">Privacy Policy</a> */}
                            </li>
                            <li>
                                <NavLink to="/article" target='_blank' rel='noreferrer'>Article Details</NavLink>
                                {/* <a href="#">Article Details</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="G-padding-25">
                    <div className="footer-box">
                        <h3>Contact Info</h3>
                        <ul className="footer-contact">
                            <li className="G-flex">
                                <span className="icon-location"></span>
                                <p>22 Sahara Street, CA, US</p>
                            </li>
                            <li className="G-flex">
                                <span className="icon-envelop"></span>
                                <a href="mailto:contact@exaple.com" >contact@exaple.com</a>
                            </li>
                            <li className="G-flex">
                                <span className="icon-phone1"></span>
                                <a href="tel:000-123456789">+000 123456789</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="G-padding-25">
                    <div className="footer-box">
                        <h3>Social Media</h3>
                        <ul className="social-icons G-flex">
                            <li>
                                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
                                    <span className="icon-facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target='_blank' rel='noreferrer'>
                                    <span className="icon-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/" target='_blank' rel='noreferrer'>
                                    <span className="icon-google-plus"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                                    <span className="icon-instagram"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'>
                                    <span className="icon-linkedin"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy-rights">
                Copyright © 2020 Template by ThemeREC
            </div>
        </div>

    </section >
}
export default Footer