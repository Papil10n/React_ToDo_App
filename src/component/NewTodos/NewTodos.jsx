import "./NewTodos.scss";
import {NavLink,} from "react-router-dom";
import {useState} from "react";

const NewTodos = (props) => {
    let [name, setName] = useState('');

    return (
        <div className="newTodo">
            <div className="newTodo__container">
                <div className="newTodo__topInfo">
                    <div className="newTodo__back">
                        <NavLink to="/todo" onClick={() => props.setNCCreatingMode(false)}
                                 className="newTodo__backBtn"/>
                    </div>
                    <div className="newTodo__title">
                        Create new category
                    </div>
                </div>
                <div className="newTodo__data">
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" placeholder="Set Name" value={name}/>
                    <button className="newTodo__data__link" onClick={() => {
                        props.createCategory(name)
                    }}>Create
                    </button>
                </div>
                {props.isError ? <div className="newTodo__error">
                    {props.errorText}
                </div> : null}
            </div>
        </div>
    )
}

export default NewTodos;