import "./Navigates.scss";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Navigates = (props) => {
    return (<>
        <nav className="app__nav">
            <ul>
                <li><NavLink to={`/todo/${props.currentTodos}/today`}>Today</NavLink></li>
                <li><NavLink to={`/todo/${props.currentTodos}/tomorrow`}>Tomorrow</NavLink></li>
                <li><NavLink to={`/todo/${props.currentTodos}/week`}>Week</NavLink></li>
            </ul>
        </nav>
        <div className="outline"></div>
    </>)
}

export default Navigates;