import "./Task.scss";
import {connect} from "react-redux";
import Task from "./Task/Task";
import {deleteTask, setTaskMode} from "../../../../redux/task-reducer";


const Tasks = (props) => {

    let taskItems = [];
    if (props.categoryes.length > 0) {
        let initial = props.categoryes.find(item => item.name === props.watchingCategory).tasks.all;
        let tasks = props.categoryMode === "all" ? initial : initial.filter(item=>item.time.includes(props.categoryMode.slice(1)));

        taskItems = tasks.map((item, index) => <Task categoryMode={props.categoryMode}
                                                     setTaskMode={props.setTaskMode} key={index}
                                                     categoryName={props.watchingCategory} data={item}
                                                     deleteTask={props.deleteTask}
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

const TasksContainer = connect(mstp, {setTaskMode, deleteTask})(Tasks);

export default TasksContainer;