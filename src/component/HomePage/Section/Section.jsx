import {NavLink} from "react-router-dom";
import {deleteCategory} from "../../../redux/task-reducer";


const Section = (props) => {

    const settingCurrentTodo = () => {
        // props.setCurrentTodos(props.name, props.number);
        // props.setCurrentDateWatching('all');
    }
    const clearCategory = (name) => {
        props.deleteCategory(name)
    }

    return (
        <div className='home__section'>
            <div>
                <div className='home__section__content'>
                    <div>
                        <button onClick={()=>clearCategory(props.name)}>Delete</button>
                    </div>
                    <NavLink onClick={settingCurrentTodo} to={`${props.name}`}>
                        <div className='section__title'>{props.name}</div>
                        <div className='section__task__counter'>*</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Section;