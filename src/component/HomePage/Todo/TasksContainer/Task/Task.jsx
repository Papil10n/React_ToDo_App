import "./Task.scss";

const Task = ({setTaskMode, categoryName, data, deleteTask}) => {

    const changeCheckBox = () => {
        setTaskMode(categoryName, data.message);
    }

    return (
        <article className="app_task">
            <div className="app_task__main">
                <div className="app__mode">
                    <input type='checkbox' onChange={changeCheckBox} checked={data.isDone} className="checkbox"/>
                </div>
                <div className="app__task__content">
                    <p className={`${data.isDone ? "app__task__content__doneTask" : "app__task__content__task"}`}>{data.message}</p>
                    <p className="app__task__content__time">{data.time}</p>
                </div>
            </div>
            <div>
                {data.isDone ? <button
                    onClick={() => deleteTask(categoryName, data.message)}>delete</button> : null}
            </div>
        </article>
    )
}

export default Task;