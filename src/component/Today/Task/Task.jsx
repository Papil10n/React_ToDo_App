import "./Task.scss";

const Task = ({task, setTaskMode}) => {
    return (
        <article className="app_task">
            <div className="app__mode">
                <input type='checkbox' onChange={()=>{setTaskMode(task.id)}} checked={task.isDone} className="checkbox"/>
            </div>
            <div className="app__task__content">
                <p className="app__task__content__task">{task.message}</p>
                <p className="app__task__content__time">{task.time}</p>
            </div>
        </article>
    )
}

export default Task;