import "./Today.scss";
import {connect} from "react-redux";
import Task from "../Task/Task";

const Today = (props) => {
    let tasks = [...props.sections[props.currentTodos].tasks.today];
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

const TodayContainer = connect(mapStateToProps, {})(Today);

export default TodayContainer;