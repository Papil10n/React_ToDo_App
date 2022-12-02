import "./Today.scss";
import {connect} from "react-redux";
import Task from "./Task/Task";
import {setTaskMode} from "../../redux/today-reducer";

const Today = (props) => {
    let taskItems = props.tasks.map(task => <Task key={task.id} setTaskMode={props.setTaskMode} task={task}></Task>);
    return (
            <div className="app__content">
                {taskItems}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.today.tasks,
    }
}

const TodayContainer = connect(mapStateToProps, {setTaskMode})(Today);

export default TodayContainer;