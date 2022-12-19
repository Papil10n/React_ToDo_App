import {NavLink} from "react-router-dom";
import React from "react";
import "./HomePage.scss";
import PopUpMenu from "./PopUpMenu/PopUpMenu";


const HomePage = (props) => {
    return (
        <div className='home'>
            {props.isPopUpShowing ? <PopUpMenu setToMountPopUp={props.setToMountPopUp} setNewUserName={props.setNewUserName}/> : null}
            <div className='home__container'>
                <div className='home__top__content'>
                    <div className='home__burger'>
                        <button onClick={() => {
                            props.setToMountPopUp(true);
                        }}/>
                    </div>
                    <div className='home__text'>
                        <p className='home__top__hello'>Hello</p>
                        <p className='home__top__nick'>{props.username}</p>
                    </div>
                </div>
                <div className="home__sections">
                    {props.items}
                </div>
                <div className='home__add__task__wrap'>
                        <NavLink to='/new_todo' onClick={() => props.setNewCategoryCreatingMode(true)}
                                 className='home__add__task'/>
                </div>
            </div>
        </div>
    )
}


export default HomePage;