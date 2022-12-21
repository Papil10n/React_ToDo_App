import {connect} from "react-redux";
import {
    changeNewTaskMode,
    setAvailableCategory,
    settingWatchingCategory,
    watchingCategoryMode
} from "../../../redux/task-reducer";
import Todo from "./Todo";
import NewTaskContainer from "./NewTask/newTaskContainer";


const TodoContainer = (props) => {
    return props.isNewTaskCreating ? <NewTaskContainer/> :
        <Todo settingWatchingCategory={props.settingWatchingCategory} watchingCategory={props.watchingCategory}
              watchingCategoryMode={props.watchingCategoryMode} changeNewTaskMode={props.changeNewTaskMode}/>
}

const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
        watchingCategory: state.tasksReducer.watchingCategory,
        watchingCategoryMode: state.tasksReducer.watchingCategoryMode,
        isNewTaskCreating: state.tasksReducer.isNewTaskCreating,
    }
}

export default connect(mstp, {
    changeNewTaskMode, setAvailableCategory,
    watchingCategoryMode, settingWatchingCategory
})(TodoContainer);
