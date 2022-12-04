import {NavLink} from "react-router-dom";
import "./HomePage.scss";
import {connect} from "react-redux";
import Section from "./Section/Section";
import  {setCurrentDateWatching, setCurrentTodos} from "../../redux/task-reducer";

const HomePage = (props) => {
    const sections = props.sections.map((s, i) => <Section key={s.id} number={i}
                                                           setCurrentDateWatching={props.setCurrentDateWatching}
                                                           setCurrentTodos={props.setCurrentTodos}
                                                           name={s.name} tasks={s.tasks}/>)
    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__top__content'>
                    <div className='home__burger'>
                        <button onClick={() => {
                            console.log('***')
                        }}/>
                    </div>
                    <div className='home__text'>
                        <p className='home__top__hello'>Hello</p>
                        <p className='home__top__nick'>Guest</p>
                    </div>
                </div>
                {sections}
                <div className='home__add__task__wrap'>
                    {sections.length <= 4 ? <NavLink to='/new_todo' className='home__add__task'/> : null}
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

const HomePageContainer = connect(mstp, {setCurrentTodos, setCurrentDateWatching})(HomePage);

export default HomePageContainer;