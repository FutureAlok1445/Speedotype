import "./Navbar.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import { PiSpeedometerFill } from "react-icons/pi";
function Navbar(props)
{
    return  <div className= {props.dabba ? "dark-navbar" : "navbar"}>
                <h1><PiSpeedometerFill/>SPEEDOO</h1>
                <div className="nav-right">
                <p className="best-text">Best Score : <span className="best-score">{props.best}</span></p>
                <button className="theme-toggle" onClick={props.changeTheme}>{props.dabba? <MdOutlineLightMode/> : <MdDarkMode/>}</button>
            </div>

    </div>
}
export default Navbar;