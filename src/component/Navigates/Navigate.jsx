import "./Navigates.scss";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentDateWatching} from "../../redux/task-reducer";

const Navigates = (props) => {

    const setDateWatching = (date) => {
        props.setCurrentDateWatching(date);
    }

    return (<>
        <nav className="app__nav">
            <ul>
                <li><NavLink onClick={()=>setDateWatching('all')} to={`/todo/${props.watchingCategory}/all`}>All</NavLink></li>
                <li><NavLink onClick={()=>setDateWatching('today')} to={`/todo/${props.watchingCategory}/today`}>Today</NavLink></li>
                <li><NavLink onClick={()=>setDateWatching('tomorrow')} to={`/todo/${props.watchingCategory}/tomorrow`}>Tomorrow</NavLink></li>
            </ul>
        </nav>
        <div className="outline"></div>
    </>)
}

const mstp = (state) => {
    return {

    }
}

const NavigatesContainer = connect(mstp, {setCurrentDateWatching})(Navigates);

export default NavigatesContainer;