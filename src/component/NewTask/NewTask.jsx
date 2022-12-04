import "./NewTask.scss";
import {NavLink} from "react-router-dom";

const NewTask = (props) => {
    return (
        <div className="newTodo">
            <div className="newTodo__container">
                <div className="newTodo__topInfo">
                    <div className="newTodo__back">
                        <NavLink to="/todo" className="newTodo__backBtn"/>
                    </div>
                    <div className="newTodo__title">
                        Create new task
                    </div>
                </div>

                <div className="newTodo__data">

                </div>
            </div>
        </div>
    )
}

export default NewTask;