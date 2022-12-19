import HeaderContainer from "../Header/Header";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import NavigatesContainer from "../Navigates/Navigate";
import TasksContainer from "../TasksContainer/TasksContainer";
import NewTask from "../NewTask/NewTask";
import {
    changeNewTaskMode,
    setAvailableCategory,
    settingWatchingCategory,
    watchingCategoryMode
} from "../../redux/task-reducer";
import {getCategoryMode, getWatchingCategory, setCategoryMode} from "../../LocalStorage/LS";


const Todo = (props) => {

    console.log(props.categoryMode)
    if (props.watchingCategory === null) {
        props.settingWatchingCategory(getWatchingCategory());
    }
    if (!props.categoryMode) {
        props.watchingCategoryMode(getCategoryMode())
    }


    return props.isSetNewTaskMode ? <NewTask/> : <div>
        <HeaderContainer/>
        <NavigatesContainer watchingCategory={props.watchingCategory}/>
        <div className="app__main">
            <TasksContainer />
        </div>
        <Footer changeNewTaskMode={props.changeNewTaskMode} date={props.currentDateWatching}/>
    </div>


}

const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
        watchingCategory: state.tasksReducer.watchingCategory,
        watchingCategoryMode: state.tasksReducer.watchingCategoryMode,

        currentDateWatching: state.tasksReducer.currentDateWatching,
        isSetNewTaskMode: state.tasksReducer.isSetNewTaskMode,
    }
}

const TodoContainer = connect(mstp, {changeNewTaskMode,setAvailableCategory,watchingCategoryMode, settingWatchingCategory})(Todo);

export default TodoContainer;