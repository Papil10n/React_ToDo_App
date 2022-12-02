import "./Footer.scss";
import {Navigate, NavLink} from "react-router-dom";

const Footer = (props) => {
    return (<>
        <div className="app__create">
            <div className="app__create__wrap">
                <div className="app_name">My List</div>
                <NavLink to='/new_task' className="app__add__btn" />
            </div>
        </div>
    </>)
}

export default Footer;