import {useNavigate} from "react-router-dom";
import validate, {transform} from "../../Validators/Validate";
import {connect} from "react-redux";
import {createNewCategory, setIsError, setNewCategoryCreatingMode} from "../../redux/task-reducer";
import NewTodos from "./NewTodos";


const NewTodosContainer = (props) => {
    const navigate = useNavigate();

    const createCategory = (name) => {
        if (validate.name(name, 18)) {
            props.createNewCategory(transform.successedName(name));
            props.setNewCategoryCreatingMode(false);
            navigate('/todo');
        } else {

            props.setIsError(true, transform.error(name, 18));

            setTimeout(() => {
                props.setIsError(false, null);
            }, 5000);
        }
    }

    return <NewTodos createCategory={createCategory} isError={props.isError} errorText={props.errorText}
                     setNCCreatingMode={props.setNewCategoryCreatingMode}/>
}


const mstp = (state) => {
    return {
        isError: state.tasksReducer.isError,
        errorText: state.tasksReducer.errorText,
    }
}


export default connect(mstp, {createNewCategory, setNewCategoryCreatingMode, setIsError})(NewTodosContainer);
