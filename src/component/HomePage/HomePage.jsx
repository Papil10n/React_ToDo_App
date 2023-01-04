import React from "react";
import "./HomePage.scss";
import PopUpMenuContainer from "./PopUpMenu/PopUpMenuContainer";


const HomePage = ({isPopUpShowing, setToMountPopUp, username, setNewCategoryCreatingMode, items}) => {

    return (
        <div className='home'>
            {isPopUpShowing ?
                <PopUpMenuContainer/> : null}
            <div className='home__container'>
                <div className='home__top__content'>
                    <div className='home__burger'>
                        <button onClick={() => {
                            setToMountPopUp(true);
                        }}/>
                    </div>
                    <div className='home__text'>
                        <p className='home__top__hello'>Hello</p>
                        <p className='home__top__nick'>{username}</p>
                    </div>
                </div>
                <div className="home__sections">
                    {items}
                </div>
                <div className='home__add__task__wrap'>
                    <button onClick={() => setNewCategoryCreatingMode(true)}
                             className='home__add__task'/>
                </div>
            </div>
        </div>
    )
}


export default HomePage;