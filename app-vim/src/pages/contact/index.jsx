import React, { useState } from "react";
import './style.scss';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: '',
        checked: false,
    })
    const [errorUser, setErrorUser] = useState({
        name: '',
        email: '',
        message: '',
        checked: '',
    })

    const [captchaIsDone, setCaptchaIsDone] = useState(false)
    const key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

    const validation = () => {
        let isValidate = true
        const newErrors = {
            name: '',
            email: '',
            message: '',
            checked: '',
        }
        if (!user.name.trim().length) {
            newErrors.name = 'Fill in this field'
            isValidate = false
        }
        if (!user.email.trim().length) {
            newErrors.email = 'Fill in this field'
            isValidate = false
        }
        if (!user.checked) {
            newErrors.checked = 'Check this field'
            isValidate = false
        }
        setErrorUser(newErrors)
        return isValidate
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setErrorUser({ ...errorUser, [e.target.name]: '' })
    }

    const handleConfirmClick = () => {
        if (validation()) {
            setUser({
                name: '',
                email: '',
                message: '',
                checked: '',
            })
        }
    }
    const onCaptchaChange = () => {
        setCaptchaIsDone(true)
    }
    return <section>
        <div className="G-pages-banner G-center">
            <h1>Contact Us</h1>
        </div>
        <div className="G-page-location">
            <div className="G-container G-flex">
                <a href="#">Home</a>
                <p>Contact</p>
            </div>
        </div>
        <div className="contact-container">
            <p className="cont-text">Don't hesitate to give us a call or just use the contact form below</p>
            <div className="contact-detalis">
                <ul className="G-flex">
                    <li className="G-flex">
                        <span className="icon-location"></span>
                        <p>22 Sahara Street, CA, US</p>
                    </li>
                    <li className="G-flex">
                        <span className="icon-envelop"></span>
                        <a href="mailto:contact@exaple.com">contact@exaple.com</a>
                    </li>
                    <li className="G-flex">
                        <span className="icon-phone1"></span>
                        <a href="tel:000-123456789">+000 123456789</a>
                    </li>
                </ul>
            </div>
            <div className="input-form">
                <label>
                    <input type="text" className="contact-input" placeholder="Name"
                        value={user.name} name='name' onChange={handleChange} />
                    {errorUser.name ? <p className="G-error-text">{errorUser.name}</p> : null}
                </label>
                <label>
                    <input type="text" className="contact-input" placeholder="Email"
                        value={user.email} name='email' onChange={handleChange} />
                    {errorUser.email ? <p className="G-error-text">{errorUser.email}</p> : null}
                </label>

                <textarea type="text" className="contact-input" placeholder="Your message"
                    value={user.message} name='message' onChange={handleChange} />
            </div>
            <div className="check-part">
                <label className="input-check G-flex">
                    <input type="checkbox" name="checked" value={user.checked} onChange={handleChange} />
                    <p>I have read and agree to stated conditions in <a href="#">Privacy Policy</a> and <a href="#">Terms Conditions</a></p>
                </label>
                {errorUser.checked ? <p className="G-error-text">{errorUser.checked}</p> : null}
            </div>
            <div className="captcha">
                <ReCAPTCHA
                    sitekey={key}
                    onChange={onCaptchaChange}
                />
            </div>
            <div className="contact-btn">
                <button onClick={handleConfirmClick}>SUBMIT MESSAGE</button>
            </div>
        </div>
        <div className="G-page-location">
            <div className="G-container G-flex">
                <a href="#">Home</a>
                <p>Contact</p>
            </div>
        </div>
    </section>
}
export default ContactUs