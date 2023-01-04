import {useNavigate} from "react-router-dom";
import validate, {transform} from "../../Validators/Validate";
import {connect} from "react-redux";
import {createNewCategory, setIsError, setNewCategoryCreatingMode} from "../../redux/task-reducer";
import NewTodos from "./NewTodos";


const NewTodosContainer = ({createNewCategory, setNewCategoryCreatingMode, setIsError, isError, errorText}) => {
    const navigate = useNavigate();

    const createCategory = (name) => {
        if (validate.name(name, 18)) {
            setIsError(false, null);
            createNewCategory(transform.successedName(name));
            setNewCategoryCreatingMode(false);
            navigate('/todo');
        } else {
            setIsError(true, transform.error(name, 18));
        }
    }

    return <NewTodos createCategory={createCategory} isError={isError} errorText={errorText}
                     setNCCreatingMode={setNewCategoryCreatingMode}/>
}


const mstp = (state) => {
    return {
        isError: state.tasksReducer.isError,
        errorText: state.tasksReducer.errorText,
    }
}


export default connect(mstp, {createNewCategory, setNewCategoryCreatingMode, setIsError})(NewTodosContainer);
