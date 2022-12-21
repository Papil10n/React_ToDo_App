import {connect} from "react-redux";
import {
    changeNewTaskMode,
    setAvailableCategory,
    settingWatchingCategory,
    watchingCategoryMode
} from "../../../redux/task-reducer";
import Todo from "./Todo";
import NewTaskContainer from "./NewTask/newTaskContainer";


const TodoContainer = ({isNewTaskCreating, settingWatchingCategory, watchingCategoryMode, watchingCategory, changeNewTaskMode}) => {
    return isNewTaskCreating ? <NewTaskContainer/> :
        <Todo settingWatchingCategory={settingWatchingCategory} watchingCategory={watchingCategory}
              watchingCategoryMode={watchingCategoryMode} changeNewTaskMode={changeNewTaskMode}/>
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
