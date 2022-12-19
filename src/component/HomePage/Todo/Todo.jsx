import Footer from "./Footer/Footer";
import {connect} from "react-redux";
import TasksContainer from "./TasksContainer/TasksContainer";
import NewTask from "./NewTask/NewTask";
import {
    changeNewTaskMode,
    setAvailableCategory,
    settingWatchingCategory,
    watchingCategoryMode
} from "../../../redux/task-reducer";
import Header from "./Header/Header";
import Navigates from "./Navigates/Navigate";


const Todo = (props) => {

    return props.isNewTaskCreating ? <NewTask/> : <div>
        <Header settingWatchingCategory={props.settingWatchingCategory}/>
        <Navigates watchingCategory={props.watchingCategory} watchingCategoryMode={props.watchingCategoryMode}/>
        <div className="app__main">
            <TasksContainer/>
        </div>
        <Footer changeNewTaskMode={props.changeNewTaskMode}/>
    </div>


}

const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
        watchingCategory: state.tasksReducer.watchingCategory,
        watchingCategoryMode: state.tasksReducer.watchingCategoryMode,
        isNewTaskCreating: state.tasksReducer.isNewTaskCreating,

    }
}

const TodoContainer = connect(mstp, {
    changeNewTaskMode,
    setAvailableCategory,
    watchingCategoryMode,
    settingWatchingCategory
})(Todo);

export default TodoContainer;