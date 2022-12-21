import {NavLink} from "react-router-dom";

const Section = (props) => {

    const setWatchingCategory = () => {
        props.settingWatchingCategory(props.name);
        props.watchingCategoryMode("all");
    }
    const clearCategory = (name) => {
        props.deleteCategory(name);
    }

    return (
        <div className='home__section'>
            <div>
                <div className='home__section__content'>
                    <button className="home__section__delBtn" onClick={() => clearCategory(props.name)}>X</button>
                    <NavLink className="home__section__article" onClick={setWatchingCategory} to={`${props.name}/all`}>
                        <span
                            className={props.name.length > 13 ? 'section__title__sm' : 'section__title'}>{props.name}</span>
                        <span className='section__task__counter'>{props.count}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Section;