import {NavLink} from "react-router-dom";


const Section = (props) => {
    const settingCurrentTodo = () => {
        props.setCurrentTodos(props.name, props.number);
        props.setCurrentDateWatching('all');
    }

    return (
        <NavLink onClick={settingCurrentTodo} to={`${props.name}/all`} className='home__section'>
            <div className='home__section__content'>
                <div className='section__title'>{props.name}</div>
                <div className='section__task__counter'>{props.tasks.all ? props.tasks.all.length : 0}</div>
            </div>
        </NavLink>
    )
}

export default Section;