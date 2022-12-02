import "./Navigate.scss";
import {NavLink} from "react-router-dom";

const Navigate = (props) => {
    return (<>
        <nav className="app__nav">
            <ul>
                <li><NavLink to='/today'>Today</NavLink></li>
                <li><NavLink to='/tomorrow'>Tomorrow</NavLink></li>
                <li><NavLink to='/week'>Week</NavLink></li>
            </ul>
        </nav>
        <div className="outline"></div>
    </>)
}

export default Navigate;