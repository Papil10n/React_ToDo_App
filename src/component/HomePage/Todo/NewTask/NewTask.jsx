import "./NewTask.scss";
import {useState} from "react";


const NewTask = (props) => {
    let [task, setTask] = useState('');
    let [day, setDay] = useState("Today");

    const taskChanger = (e) => {
        setTask(e.target.value);
    }
    const setDayFn = (e) => {
        setDay(e.target.value);
        e.target.blur();
    }

    return (
        <div className="newTodo">
            <div className="newTodo__container">
                <div className="newTodo__topInfo">
                    <div className="newTodo__back">
                        <button onClick={() => {
                            props.changeNewTaskMode(false)
                        }} className="newTodo__backBtn"/>
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
                            <select defaultValue={"none"} onChange={(e) => {
                                setDayFn(e)
                            }} name="data" className="newTask__data__select">
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Without date">Without date</option>
                            </select>
                        </div>
                    </div>
                    <div className="newTask__data__btn">
                        <button onClick={()=>{props.dataSubmit(task, day)}}>Create</button>
                    </div>
                    {props.isError ? <div className="newTask_error">
                        {props.errorText}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default NewTask;