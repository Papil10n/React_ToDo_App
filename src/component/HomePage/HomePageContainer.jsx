import React from "react";
import "./HomePage.scss";
import {connect} from "react-redux";
import Section from "./Section/Section";
import {
    deleteCategory,
    setAvailableCategory,
    setCurrentDateWatching,
    setNewCategoryCreatingMode, settingWatchingCategory, watchingCategoryMode
} from "../../redux/task-reducer";
import HomePage from "./HomePage";
import TodoContainer from "../Todo/Todo";


const HomePageCont = (props) => {
    const items = props.categoryes.map((item, index) => <Section key={index} name={item.name}
                                                                 deleteCategory={props.deleteCategory}
                                                                 watchingCategoryMode={props.watchingCategoryMode}
                                                                 settingWatchingCategory={props.settingWatchingCategory}/>)

    return (
        <>
            {props.watchingCategory ? <TodoContainer/> : <HomePage items={items} categoryes={props.categoryes}
                                                                   setNewCategoryCreatingMode={props.setNewCategoryCreatingMode}/>}
        </>
    )

}


const mstp = (state) => {
    return {
        categoryes: state.tasksReducer.categoryes,
        watchingCategory: state.tasksReducer.watchingCategory,
    }
}

const HomePageContainer = connect(mstp, {
    settingWatchingCategory, setCurrentDateWatching,
    setAvailableCategory, deleteCategory, watchingCategoryMode, setNewCategoryCreatingMode,
})(HomePageCont);


export default HomePageContainer;
