import "./Navigates.scss";
import {NavLink} from "react-router-dom";



const Navigates = (props) => {

    const setCategoryMode = (mode) => {
        props.watchingCategoryMode(mode);
    }

    return (<>
        <nav className="app__nav">
            <ul>
                <li><NavLink onClick={()=>setCategoryMode('all')} to={`${props.watchingCategory}/all`}>All</NavLink></li>
                <li><NavLink onClick={()=>setCategoryMode('today')} to={`${props.watchingCategory}/today`}>Today</NavLink></li>
                <li><NavLink onClick={()=>setCategoryMode('tomorrow')} to={`${props.watchingCategory}/tomorrow`}>Tomorrow</NavLink></li>
            </ul>
        </nav>
        <div className="outline"></div>
    </>)
}

export default Navigates;