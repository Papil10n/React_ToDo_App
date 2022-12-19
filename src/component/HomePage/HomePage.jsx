import {NavLink} from "react-router-dom";
import React from "react";
import "./HomePage.scss";



const HomePage = (props) => {
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
                    {props.items}
                </div>
                <div className='home__add__task__wrap'>
                    {props.categoryes.length < 10 ?
                        <NavLink to='/new_todo' onClick={() => props.setNewCategoryCreatingMode(true)}
                                 className='home__add__task'/> : null}
                </div>
            </div>
        </div>
    )
}


export default HomePage;