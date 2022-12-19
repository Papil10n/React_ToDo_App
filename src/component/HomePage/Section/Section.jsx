import {NavLink} from "react-router-dom";
import {deleteCategory, settingWatchingCategory} from "../../../redux/task-reducer";


const Section = (props) => {

    const setWatchingCategory = () => {
        props.settingWatchingCategory(props.name);
        props.watchingCategoryMode("all");

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
                    <NavLink onClick={setWatchingCategory} to={`${props.name}/all`}>
                        <div className='section__title'>{props.name}</div>
                        <div className='section__task__counter'>*</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Section;