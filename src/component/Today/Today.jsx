import "./Today.scss";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {setTaskMode, setTaskModeToday, setTaskModeTomorrow, taskModeChanger} from "../../redux/task-reducer";

const Today = (props) => {
    let tasks = [...props.sections[props.currentTodosNum].tasks.today];
    let taskItems = tasks.map(task => <Task sNum={props.currentTodosNum} mode='today' setTaskMode={props.setTaskMode} key={task.id} task={task}></Task>);
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

const TodayContainer = connect(mapStateToProps, {setTaskMode})(Today);

export default TodayContainer;