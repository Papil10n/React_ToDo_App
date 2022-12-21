import validate, {transform} from "../../../../Validators/Validate";
import {connect} from "react-redux";
import {changeNewTaskMode, createNewTask, setIsError} from "../../../../redux/task-reducer";
import NewTask from "./NewTask";


const newTaskContainer = (props) => {

    const dataSubmit = (name, day) => {
        if (validate.name(name, 50)) {
            props.createNewTask(props.watchingCategory, transform.successedName(name), day)
            props.changeNewTaskMode(false);

        } else {
            props.setIsError(true, transform.error(name, 50));

            setTimeout(() => {
                props.setIsError(false, null);
            }, 5000);
        }
    }

    return <NewTask dataSubmit={dataSubmit} isError={props.isError} errorText={props.errorText} changeNewTaskMode={props.changeNewTaskMode}/>
}


const mstp = (state) => {
    return {
        watchingCategory: state.tasksReducer.watchingCategory,
        isError: state.tasksReducer.isError,
        errorText: state.tasksReducer.errorText,
    }
}

export default connect(mstp, {createNewTask, setIsError, changeNewTaskMode})(newTaskContainer);