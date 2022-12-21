import validate, {transform} from "../../../../Validators/Validate";
import {connect} from "react-redux";
import {changeNewTaskMode, createNewTask, setIsError} from "../../../../redux/task-reducer";
import NewTask from "./NewTask";


const newTaskContainer = ({createNewTask, changeNewTaskMode, watchingCategory, setIsError, isError, errorText}) => {

    const dataSubmit = (name, day) => {
        if (validate.name(name, 50)) {
            createNewTask(watchingCategory, transform.successedName(name), day)
            changeNewTaskMode(false);

        } else {
            setIsError(true, transform.error(name, 50));

            setTimeout(() => {
                setIsError(false, null);
            }, 5000);
        }
    }

    return <NewTask dataSubmit={dataSubmit} isError={isError} errorText={errorText}
                    changeNewTaskMode={changeNewTaskMode}/>
}


const mstp = (state) => {
    return {
        watchingCategory: state.tasksReducer.watchingCategory,
        isError: state.tasksReducer.isError,
        errorText: state.tasksReducer.errorText,
    }
}

export default connect(mstp, {createNewTask, setIsError, changeNewTaskMode})(newTaskContainer);