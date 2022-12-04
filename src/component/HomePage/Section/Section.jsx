import {NavLink} from "react-router-dom";
import {setCurrentTodos} from "../../../redux/task-reducer";


const Section = (props) => {
    const settingCurrentTodo = () => {
        props.setCurrentTodos(props.name, props.number);
    }

    return (
        <NavLink onClick={settingCurrentTodo} to={`${props.name}/today`} className='home__section'>
            <div className='home__section__content'>
                <div className='section__title'>{props.name}</div>
                <div className='section__task__counter'>{props.tasks.today ? props.tasks.today.length : 0}</div>
            </div>
        </NavLink>
    )
}

export default Section;