import React from "react";
import './style.scss';

const PricingBox = ({ title, price, duration, className1, className }) => {
    // pricing count animation js


    return <div className="G-pricing-box">
        <p className="G-pricing-name">{title}</p>
        <div className="price-border">
            <div className="G-flex">
                <span className="currency">$</span>
                <h3 className="G-pricing-price">{price}</h3>
            </div>
            <p className="G-price-duration">{duration}</p>
        </div>
        <ul className="pricing-details">
            <li>
                <span className="done"></span>
                <p>Email Marketing Module</p>
            </li>
            <li>
                <span className="done"></span>
                <p>User Control Management</p>
            </li>
            <li>
                <span className={className1}></span>
                <p>List Building And Cleaning</p>
            </li>
            <li>
                <span className={className}></span>
                <p>Collected Data Reports</p>
            </li>
            <li>
                <span className={className}></span>
                <p>Planning And Evaluation</p>
            </li>
        </ul>
        <div className="price-btn G-center">
            <button>Download</button>
        </div>
    </div>
}
export default PricingBox