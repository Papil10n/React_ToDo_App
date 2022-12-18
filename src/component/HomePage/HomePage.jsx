import {NavLink} from "react-router-dom";
import React from "react";
import "./HomePage.scss";
import {connect} from "react-redux";
import Section from "./Section/Section";
import tasksReducer, {
    deleteCategory,
    setAvailableCategory,
    setCurrentDateWatching,
    setCurrentTodos
} from "../../redux/task-reducer";

const HomePage = (props) => {

    let items = props.categoryes.map((item, index) => <Section key={index} name={item.name}
                                                               deleteCategory={props.deleteCategory}/>)

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
                <div className="home__sections">
                    {items}
                </div>
                <div className='home__add__task__wrap'>
                    {/*{categoryes.length < 10 ? <NavLink to='/new_todo' className='home__add__task'/> : null}*/}
                    <NavLink to='/new_todo' className='home__add__task'/>
                </div>
            </div>
        </div>
    )
}


const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
    }
}

export default connect(mstp, {setCurrentTodos, setCurrentDateWatching,
    setAvailableCategory, deleteCategory})(HomePage);
;