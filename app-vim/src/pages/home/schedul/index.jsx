import React from "react";
import './style.scss';
import "../../../assets//style//global.scss";


const Schedul = () => {

    return <div className="schedul-main">
        <p className="schedul-direct">
            <b>Schedule tasks</b> to keep track of their completion. AppVim provides multiple scheduling options including alarms and reminders.
        </p>
        <ul>
            <li className="schedul-list">
                <span>v</span>
                <p>
                    You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel
                </p>
            </li>
            <li className="schedul-list">
                <span>v</span>
                <p>
                    It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals
                </p>
            </li>
            <li className="schedul-list">
                <span>v</span>
                <p>
                    Use phone reminders to free up your long term memory which will reduce stress and make you more productive
                </p>
            </li>
        </ul>
        <div className="G-flex">
            <button className="bg-button">Term</button>
            <button className="transparent G-button-transparent">Privacy</button>
        </div>
    </div>
}
export default Schedul