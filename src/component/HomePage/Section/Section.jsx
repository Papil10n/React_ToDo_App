import {NavLink} from "react-router-dom";


const Section = (props) => {
    console.log(props)
    const settingCurrentTodo = () => {
        // props.setCurrentTodos(props.name, props.number);
        // props.setCurrentDateWatching('all');
    }

    return (
        <div className='home__section'>
            <NavLink onClick={settingCurrentTodo} to={`${props.name}/all`} >
                <div className='home__section__content'>
                    <div className='section__title'>{props.name}</div>
                    <div className='section__task__counter'>*</div>
                </div>
            </NavLink>
        </div>
    )
}

export default Section;