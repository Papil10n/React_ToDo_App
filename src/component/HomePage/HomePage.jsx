import {NavLink} from "react-router-dom";
import "./HomePage.scss";
import {connect} from "react-redux";
import Section from "./Section/Section";
import tasksReducer, {setCurrentTodos} from "../../redux/task-reducer";

const HomePage = (props) => {
    const sections = Object.entries(props.sections).map(section => <Section setCurrentTodos={props.setCurrentTodos}
                                                                            data={section}/>)

    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__top__content'>
                    <div className='home__burger'>
                        <button/>
                    </div>
                    <div className='home__text'>
                        <p className='home__top__hello'>Hello</p>
                        <p className='home__top__nick'>Daniel</p>
                    </div>
                </div>
                {/* sections */}
                {sections}

                <div className='home__add__task__wrap'>
                    <NavLink to='/new_task' className='home__add__task'/>

                </div>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        sections: state.tasksReducer.sections
    }
}

const HomePageContainer = connect(mstp, {setCurrentTodos})(HomePage);

export default HomePageContainer;