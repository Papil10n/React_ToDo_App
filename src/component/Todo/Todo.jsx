import HeaderContainer from "../Header/Header";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import NavigatesContainer from "../Navigates/Navigate";
import TasksContainer from "../TasksContainer/TasksContainer";


const Todo = (props) => {
    return (
        <div>
            <HeaderContainer/>
            <NavigatesContainer currentTodos={props.currentTodos}/>
            <div className="app__main">
                <TasksContainer date={props.currentDateWatching} currentTodosNum={props.currentTodosNum}/>
            </div>
            <Footer/>
        </div>
    )
}

const mstp = (state) => {
    return {
        currentTodos: state.tasksReducer.currentTodos,
        currentTodosNum: state.tasksReducer.currentTodosNum,
        currentDateWatching: state.tasksReducer.currentDateWatching,
    }
}

const TodoContainer = connect(mstp, {})(Todo);

export default TodoContainer;