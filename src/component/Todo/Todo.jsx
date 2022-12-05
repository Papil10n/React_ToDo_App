import HeaderContainer from "../Header/Header";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import NavigatesContainer from "../Navigates/Navigate";
import TasksContainer from "../TasksContainer/TasksContainer";
import NewTask from "../NewTask/NewTask";
import {changeNewTaskMode} from "../../redux/task-reducer";


const Todo = (props) => {

    return props.isSetNewTaskMode ? <NewTask/> : <div>
        <HeaderContainer/>
        <NavigatesContainer currentTodos={props.currentTodos}/>
        <div className="app__main">
            <TasksContainer date={props.currentDateWatching} currentTodosNum={props.currentTodosNum}/>
        </div>
        <Footer changeNewTaskMode={props.changeNewTaskMode} date={props.currentDateWatching} currentTodos={props.currentTodos}/>
    </div>


}

const mstp = (state) => {
    return {
        currentTodos: state.tasksReducer.currentTodos,
        currentTodosNum: state.tasksReducer.currentTodosNum,
        currentDateWatching: state.tasksReducer.currentDateWatching,
        isSetNewTaskMode: state.tasksReducer.isSetNewTaskMode
    }
}

const TodoContainer = connect(mstp, {changeNewTaskMode})(Todo);

export default TodoContainer;