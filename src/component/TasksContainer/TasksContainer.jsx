import "./Task.scss";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {setTaskMode} from "../../redux/task-reducer";

const Tasks = (props) => {
    console.log('орисовка таскс')
    let taskItems;

    if (props.sections[props.currentTodosNum].tasks.all.length !== undefined) {
        let tasks = [...props.sections[props.currentTodosNum].tasks.all];
        taskItems = tasks.map(task => <Task sNum={props.currentTodosNum} mode={props.date}
                                            setTaskMode={props.setTaskMode} key={task.id} task={task}></Task>);
    }

    return (
        <div className="app__content">
            {taskItems}
        </div>
    )
}

const mstp = (state) => {
    return {
        sections: state.tasksReducer.sections
    }
}

const TasksContainer = connect(mstp, {setTaskMode})(Tasks);

export default TasksContainer;