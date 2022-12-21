import "./Task.scss";
import {connect} from "react-redux";
import Task from "./Task/Task";
import {deleteTask, setTaskMode} from "../../../../redux/task-reducer";


const TasksContainer = ({categoryes, categoryMode, watchingCategory, setTaskMode, deleteTask}) => {

    let taskItems = [];
    if (categoryes.length > 0) {
        let initial = categoryes.find(item => item.name === watchingCategory).tasks.all;
        let tasks = categoryMode === "all" ? initial : initial.filter(item => item.time.includes(categoryMode.slice(1)));

        taskItems = tasks.map((item, index) => <Task categoryMode={categoryMode}
                                                     setTaskMode={setTaskMode} key={index}
                                                     categoryName={watchingCategory} data={item}
                                                     deleteTask={deleteTask}
        />);
    }

    return (
        <div className="app__content">
            {taskItems}
        </div>
    )
}

const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
        watchingCategory: state.tasksReducer.watchingCategory,
        categoryMode: state.tasksReducer.categoryMode,
    }
}

export default connect(mstp, {setTaskMode, deleteTask})(TasksContainer);
