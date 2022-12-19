import "./Task.scss";
import {connect} from "react-redux";
import Task from "./Task/Task";
import {setTaskMode} from "../../../../redux/task-reducer";


const Tasks = (props) => {
    let taskItems = [];
    if (props.categoryes.length > 0) {
        let tasks = props.categoryes.find(item => item.name === props.watchingCategory).tasks.all;

        taskItems = tasks.map((item, index) => <Task categoryMode={props.categoryMode}
                                                     setTaskMode={props.setTaskMode} key={index}
                                                     categoryName={props.watchingCategory} data={item}/>);
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

const TasksContainer = connect(mstp, {setTaskMode})(Tasks);

export default TasksContainer;