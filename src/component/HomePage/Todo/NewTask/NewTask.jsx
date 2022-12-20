import "./NewTask.scss";
import {useState} from "react";
import {connect} from "react-redux";
import {changeNewTaskMode, createNewTask} from "../../../../redux/task-reducer";
import validate from "../../../../Validators/Validate";


const NewTask = (props) => {
    let [task, setTask] = useState();
    let [day, setDay] = useState("Today");

    const taskChanger = (e) => {
        setTask(e.target.value);
    }
    const setDayFn = (e) => {
        setDay(e.target.value);
        e.target.blur();
    }

    const dataSubmit = () => {
        if (validate.taskName(task)) {
            // use trim()
            task.trim();
            task = `${task[0].toUpperCase()}${task.slice(1)}`;

            props.createNewTask(props.watchingCategory, task, day)
            props.changeNewTaskMode(false);

        } else {
            alert('Please enter valid Task Name')
            // show problem
        }
    }



    return (
        <div className="newTodo">
            <div className="newTodo__container">
                <div className="newTodo__topInfo">
                    <div className="newTodo__back">
                        <button onClick={()=>{props.changeNewTaskMode(false)}} className="newTodo__backBtn"/>
                    </div>
                    <div className="newTodo__title">
                        Create new task
                    </div>
                </div>

                <div className="newTodo__data">
                    <div className="newTask__data__ec">
                        <p>Task</p>
                        <input onChange={(e) => {
                            taskChanger(e)
                        }} type="text" placeholder="write here"/>
                    </div>
                    <div className="newTask__data__ec">
                        <p>Date</p>
                        <div className="newTask__data__cont">
                            <select defaultValue={"none"} onChange={(e)=>{setDayFn(e)}} name="data" className="newTask__data__select">
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Without date">Without date</option>
                            </select>
                        </div>
                    </div>
                    <div className="newTask__data__btn">
                        <button onClick={dataSubmit}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        watchingCategory: state.tasksReducer.watchingCategory,
    }
}

const NewTaskContainer = connect(mstp,{createNewTask, changeNewTaskMode})(NewTask);

export default NewTaskContainer;