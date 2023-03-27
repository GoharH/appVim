import React from "react";
import { NavLink } from "react-router-dom";

const NavigationList = ({ className }) => {

    return <ul className={className}>
        <li>
            <NavLink to={"/home"}>Home</NavLink >
        </li>
        <li>
            <NavLink to={"/terms"}>Terms</NavLink >
        </li>
        <li>
            <NavLink to={"/privacy"}>Privacy</NavLink >
        </li>
        <li>
            <NavLink to={"/article"}>Article</NavLink >
        </li>
        <li>
            <NavLink to={"/contact"}>Contact</NavLink >
        </li>
    </ul>

}
export default NavigationList