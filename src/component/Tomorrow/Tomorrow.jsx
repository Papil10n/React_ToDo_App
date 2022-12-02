import "./Tomorrow.scss";
import {connect} from "react-redux";
import Task from "../Task/Task";

const Tomorrow = (props) => {
    let tasks = [...props.sections[props.currentTodos].tasks.tomorrow];
    let taskItems = tasks.map(task => <Task key={task.id} task={task}></Task>);
    return (
        <div className="app__content">
            {taskItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sections: state.tasksReducer.sections
    }
}

const TomorrowContainer = connect(mapStateToProps, {})(Tomorrow);

export default TomorrowContainer;