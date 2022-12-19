import "./NewTask.scss";
import {useState} from "react";
import {connect} from "react-redux";
import {changeNewTaskMode, createNewTask} from "../../../../redux/task-reducer";

const NewTask = (props) => {
    let [task, setTask] = useState();
    let [day, setDay] = useState(1);
    let [month, setMonth] = useState(12);
    let [year, setYear] = useState(2022);

    const taskChanger = (e) => {
        setTask(e.target.value);
    }

    const dayChanger = (e) => {
        e.target.value > 0 && e.target.value < 31 ? setDay(e.target.value) : alert('you try to set invalid day')
    }
    const monthChanger = (e) => {
        e.target.value > 0 && e.target.value < 13 ? setMonth(e.target.value) : alert('you try to set invalid month')
    }
    const yearChanger = (e) => {
        e.target.value > 2022 && e.target.value < 2071 ? setYear(e.target.value) : alert('you try to set invalid year')
    }

    const dataSubmit = () => {

        if (validateTask(task)) {
            // use trim()
            // dispatch to state new block
            // redirect to homePage
            const time = `${day}/${month}/${year}`;
            props.createNewTask(props.watchingCategory, task, time)
            props.changeNewTaskMode(false);

        } else {
            alert('Please enter valid Task Name')
            // show problem
        }
    }

    const validateTask = (taskName) => {
        if (!taskName) {
            return false;
        }
        return taskName.length < 18 && taskName.length !== 0
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
                        <p>Time</p>
                        <div className="newTask__data__cont">
                            <input onChange={(e) => {
                                dayChanger(e)
                            }} type="number" min="1" max="30" placeholder="Day" value={day}/>
                            <input onChange={(e) => {
                                monthChanger(e)
                            }} type="number" min="1" max="12" placeholder="Month" value={month}/>
                            <input onChange={(e) => {
                                yearChanger(e)
                            }} type="number" min="2022" max="2070" placeholder="Year" value={year}/>
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