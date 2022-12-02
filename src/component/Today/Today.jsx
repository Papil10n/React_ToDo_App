import "./Today.scss";

const Today = (props) => {

    return (<>
            <div className="app__content">

                {/*  tasks  */}
                <article className="app_task">
                    <div className="app__mode">
                        <button disabled={false} className="checkbox"/>
                    </div>
                    <div className="app__task__content">
                        <p className="app__task__content__task">Walk the dog</p>
                        <p className="app__task__content__time">10:00 am</p>
                    </div>
                </article>
                {/*  tasks  */}

            </div>

    </>




    )
}

export default Today;