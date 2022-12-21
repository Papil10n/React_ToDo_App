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
import {getUserName} from "../../LocalStorage/LS";
import TodoContainer from "./Todo/TodoContainer";


const HomePageCont = ({
                          username,
                          setNewUserName,
                          categoryes,
                          deleteCategory,
                          watchingCategoryMode,
                          settingWatchingCategory,
                          watchingCategory,
                          setNewCategoryCreatingMode,
                          isPopUpShowing,
                          setToMountPopUp
                      }) => {

    if (username === null) {
        setNewUserName(getUserName());
    }

    let items = [];
    if (categoryes !== null) {
        items = categoryes.map((item, index) => <Section key={index} name={item.name}
                                                         count={item.tasks.all.length}
                                                         deleteCategory={deleteCategory}
                                                         watchingCategoryMode={watchingCategoryMode}
                                                         settingWatchingCategory={settingWatchingCategory}/>)
    }
    return (
        <>
            {watchingCategory ? <TodoContainer/> : <HomePage items={items} categoryes={categoryes}
                                                             setNewCategoryCreatingMode={setNewCategoryCreatingMode}
                                                             setToMountPopUp={setToMountPopUp}
                                                             isPopUpShowing={isPopUpShowing}
                                                             setNewUserName={setNewUserName}
                                                             username={username}
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

export default connect(mstp, {
    settingWatchingCategory,
    setCurrentDateWatching,
    setAvailableCategory,
    deleteCategory,
    watchingCategoryMode,
    setNewCategoryCreatingMode,
    setToMountPopUp,
    setNewUserName,
})(HomePageCont);
