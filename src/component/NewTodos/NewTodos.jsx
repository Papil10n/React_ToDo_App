import "./NewTodos.scss";
import {Navigate, NavLink} from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {createNewCategory, setNewCategoryCreatingMode} from "../../redux/task-reducer";

const NewTodos = (props) => {
    let [name, setName] = useState('');

    const changeTodosName = (e) => {
        setName(e.target.value)
    }

    const createTodos = () => {
        if (validateTodos(name)) {

            props.createNewCategory(name.trim());
            props.setNewCategoryCreatingMode(false);
            return <Navigate to='/todo' />

        } else {
            alert('Please enter valid Todo Name')
            // show problem
        }

    }

    // transfer to another file
    const validateTodos = () => {
        return name.length < 14  && name.length !== 0
    }

    return (
        <div className="newTodo">
            <div className="newTodo__container">
                <div className="newTodo__topInfo">
                    <div className="newTodo__back">
                        <NavLink to="/todo" onClick={()=>props.setNewCategoryCreatingMode(false)} className="newTodo__backBtn" />
                    </div>
                    <div className="newTodo__title">
                        Create new ToDo List
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