import "./Header.scss";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<>
        <div className="app__head">
            <NavLink to='/todo' onClick={() => {
                props.settingWatchingCategory(null)
            }} className='app__backBtn'/>
            <h1 className="title">All Tasks</h1>
        </div>
    </>)
}


export default Header;