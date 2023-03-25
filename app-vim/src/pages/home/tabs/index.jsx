import React, { useState } from "react";
import './style.scss';
import Schedul from '../schedul';
import Tracking from '../tracking';
import Organize from '../organize';
import schaduleImg from '../../../assets/images/description-hero-6.png';


const Tabs = () => {
    const [isActive, setIsActive] = useState(1)
    const handleActive = (li) => setIsActive(li)


    return <div className="schedul G-flex">
        <div className="G-padding-50">
            <div className="schadule-image" style={{ backgroundImage: `url(${schaduleImg})` }}></div>
        </div>
        <div className="G-padding-50">
            <div className="tabs-navigator">
                <ul className="G-flex">
                    <li className={`G-flex tabs-list ${isActive === 1 ? 'activeTab' : ''} `}
                        onClick={() => handleActive(1)}>
                        <span className="icon-clock"></span>
                        <p>Schedule</p>
                    </li>
                    <li className={`G-flex tabs-list ${isActive === 2 ? 'activeTab' : ''} `}
                        onClick={() => handleActive(2)}>
                        <span className="icon-bullet-list"></span>
                        <p>Tracking</p>
                    </li>
                    {/* <li className="tabs-list G-flex"> */}
                    <li className={`G-flex tabs-list ${isActive === 3 ? 'activeTab' : ''} `}
                        onClick={() => handleActive(3)}>
                        <span className="icon-calendar"></span>
                        <p>Organize</p>
                    </li>
                </ul>
            </div>
            <div className="tabs-main">
                {isActive === 1 ? <Schedul /> : ''}
                {isActive === 2 ? <Tracking /> : ''}
                {isActive === 3 ? <Organize /> : ''}
                {/* <Schedul /> */}
                {/* <Tracking /> */}
                {/* <Organize /> */}

            </div>
        </div>
    </div>
}
export default Tabs