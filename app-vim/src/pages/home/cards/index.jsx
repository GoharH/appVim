import React from "react";
import './style.scss';
// import cardImg from '../../../assets/images/testimonial-1.jpg';

const Card = ({ cardImg, description, worker }) => {

    return <div className="card-box G-center">
        <span style={{ backgroundImage: `url(${cardImg})` }}></span>
        <p className="card-description">{description}                    </p>
        <p className="card-name">{worker}</p>
    </div>
}
export default Card