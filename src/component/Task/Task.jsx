import "./Task.scss";

const Task = (props) => {
    return (
        <article className="app_task">
            <div className="app__mode">
                <input type='checkbox' onChange={()=>{}} checked={props.task.isDone} className="checkbox"/>
            </div>
            <div className="app__task__content">
                <p className="app__task__content__task">{props.task.message}</p>
                <p className="app__task__content__time">{props.task.time}</p>
            </div>
        </article>
    )
}

export default Task;