import React from "react";
import "./HomePage.scss";
import {connect} from "react-redux";
import Section from "./Section/Section";
import {
    deleteCategory,
    setAvailableCategory,
    setCurrentDateWatching,
    setNewCategoryCreatingMode, setNewUserName, settingWatchingCategory, setToMountPopUp, watchingCategoryMode
} from "../../redux/task-reducer";
import HomePage from "./HomePage";
import TodoContainer from "./Todo/Todo";
import {getUserName} from "../../LocalStorage/LS";


const HomePageCont = (props) => {

    if (props.username === null) {
        props.setNewUserName(getUserName());
    }
    console.log(props.categoryes)
    let items = [];
    if (props.categoryes !== null) {
        items = props.categoryes.map((item, index) => <Section key={index} name={item.name} count={item.tasks.all.length}
                                                       deleteCategory={props.deleteCategory}
                                                       watchingCategoryMode={props.watchingCategoryMode}
                                                       settingWatchingCategory={props.settingWatchingCategory}/>)
    }
    return (
        <>
            {props.watchingCategory ? <TodoContainer/> : <HomePage items={items} categoryes={props.categoryes}
                                                                   setNewCategoryCreatingMode={props.setNewCategoryCreatingMode}
                                                                   setToMountPopUp={props.setToMountPopUp}
                                                                   isPopUpShowing={props.isPopUpShowing}
                                                                   setNewUserName={props.setNewUserName}
                                                                   username={props.username}
            />}
        </>
    )

}


const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
        watchingCategory: state.tasksReducer.watchingCategory,
        isPopUpShowing: state.tasksReducer.isPopUpShowing,
        username: state.tasksReducer.userName,
    }
}

const HomePageContainer = connect(mstp, {
    settingWatchingCategory,
    setCurrentDateWatching,
    setAvailableCategory,
    deleteCategory,
    watchingCategoryMode,
    setNewCategoryCreatingMode,
    setToMountPopUp,
    setNewUserName,
})(HomePageCont);


export default HomePageContainer;
