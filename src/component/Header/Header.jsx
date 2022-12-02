import "./Header.scss";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentTodos} from "../../redux/task-reducer";

const Header = (props) => {
    return (<>
        <div className="app__head">
            <NavLink to='/todo' onClick={()=>{props.setCurrentTodos(null)}} className='app__backBtn' />
            <h1 className="title">All Tasks</h1>
        </div>
    </>)
}

const mstp = (state) => ({});

const HeaderContainer = connect(mstp, {setCurrentTodos})(Header);

export default HeaderContainer;