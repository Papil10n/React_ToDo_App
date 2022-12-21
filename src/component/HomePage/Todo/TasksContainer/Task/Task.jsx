import "./Task.scss";

const Task = (props) => {

    const changeCheckBox = () => {
        props.setTaskMode(props.categoryName, props.data.message);
    }

    return (
        <article className="app_task">
            <div className="app_task__main">
                <div className="app__mode">
                    <input type='checkbox' onChange={changeCheckBox} checked={props.data.isDone} className="checkbox"/>
                </div>
                <div className="app__task__content">
                    <p className={`${props.data.isDone ? "app__task__content__doneTask" : "app__task__content__task"}`}>{props.data.message}</p>
                    <p className="app__task__content__time">{props.data.time}</p>
                </div>
            </div>
            <div>
                {props.data.isDone ? <button
                    onClick={() => props.deleteTask(props.categoryName, props.data.message)}>delete</button> : null}
            </div>
        </article>
    )
}

export default Task;