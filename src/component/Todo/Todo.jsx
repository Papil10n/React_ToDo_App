import HeaderContainer from "../Header/Header";
import Navigates from "../Navigates/Navigate";
import {Route, Routes} from "react-router-dom";
import TodayContainer from "../Today/Today";
import TomorrowContainer from "../Tomorrow/Tomorrow";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";

const Todo = (props) => {
    return (
        <div>
            <HeaderContainer/>
            <Navigates currentTodos={props.currentTodos}/>
            <div className="app__main">
                <Routes>
                    <Route path={`${props.currentTodos}/today`}
                           element={<TodayContainer currentTodosNum={props.currentTodosNum}/>}/>
                    <Route path={`${props.currentTodos}/tomorrow`}
                           element={<TomorrowContainer currentTodosNum={props.currentTodosNum}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

const mstp = (state) => {
    return {
        currentTodos: state.tasksReducer.currentTodos,
        currentTodosNum: state.tasksReducer.currentTodosNum,
    }
}

const TodoContainer = connect(mstp, {})(Todo);

export default TodoContainer;