import React from "react";
import './style.scss';


const KeyClass = ({ image, title, main }) => {

    return <div className="key-class">
        <span className="key-icon" style={{ backgroundImage: `url(${image})` }}></span>
        <h3>{title}</h3>
        <p>{main}</p>
    </div>
}
export default KeyClass