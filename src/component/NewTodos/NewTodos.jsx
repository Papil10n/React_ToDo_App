import "./NewTodos.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {createNewCategory, setNewCategoryCreatingMode} from "../../redux/task-reducer";
import validate, {transformSuccessedName} from "../../Validators/Validate";

const NewTodos = (props) => {
    let [name, setName] = useState('');
    const navigate = useNavigate();

    const changeTodosName = (e) => {
        setName(e.target.value)
    }

    const createTodos = () => {
        if (validate.categoryName(name)) {
            props.createNewCategory(transformSuccessedName(name));
            props.setNewCategoryCreatingMode(false);
            navigate('/todo');
        } else {
            alert('Please enter valid Todo Name')
            // show problem
        }
    }

    return (
        <div className="newTodo">
            <div className="newTodo__container">
                <div className="newTodo__topInfo">
                    <div className="newTodo__back">
                        <NavLink to="/todo" onClick={()=>props.setNewCategoryCreatingMode(false)} className="newTodo__backBtn" />
                    </div>
                    <div className="newTodo__title">
                        Create new category
                    </div>
                </div>

                <div className="newTodo__data">
                    <input onChange={(e)=>{changeTodosName(e)}} type="text" placeholder="Set Name" value={name}/>
                    <button className="newTodo__data__link" onClick={createTodos} >Create</button>
                </div>
            </div>
        </div>
    )
}

const mstp = () => {
    return {}
}

const NewTodosContainer = connect(mstp, {createNewCategory, setNewCategoryCreatingMode})(NewTodos);

export default NewTodosContainer;