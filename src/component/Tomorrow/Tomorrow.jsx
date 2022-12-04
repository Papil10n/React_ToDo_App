import "./Tomorrow.scss";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {setTaskMode, setTaskModeTomorrow} from "../../redux/task-reducer";

const Tomorrow = (props) => {

    let tasks = [...props.sections[props.currentTodosNum].tasks.tomorrow];
    let taskItems = tasks.map(task => <Task sNum={props.currentTodosNum} mode='tomorrow' setTaskMode={props.setTaskMode} key={task.id} task={task}></Task>);
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

const TomorrowContainer = connect(mapStateToProps, {setTaskMode})(Tomorrow);

export default TomorrowContainer;