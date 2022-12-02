import {NavLink} from "react-router-dom";

const Section = (props) => {
    return (
        <NavLink onClick={() => {
            props.setCurrentTodos(props.data[0])
        }} to={`${props.data[0]}/today`} className='home__section'>
            <div className='home__section__content'>
                <div className='section__title'>{props.data[0]}</div>
                <div className='section__task__counter'>{props.data[1].tasks.today.length}</div>
            </div>
        </NavLink>
    )
}

export default Section;