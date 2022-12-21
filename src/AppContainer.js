import './App.scss';
import React, {useEffect} from "react";
import {setAvailableCategory} from "./redux/task-reducer";
import {connect} from "react-redux";
import App from "./App";

const AppContainer = ({setAvailableCategory, isNewCategoryCreating, watchingCategory}) => {

    useEffect(() => {
        setAvailableCategory();
    })

    return <App isNewCategoryCreating={isNewCategoryCreating}
                watchingCategory={watchingCategory}/>
}

const mstp = (state) => {
    return {
        isNewCategoryCreating: state.tasksReducer.isNewCategoryCreating,
        watchingCategory: state.tasksReducer.watchingCategory,
        isNewTaskCreating: state.tasksReducer.isNewTaskCreating,
    }
}



export default connect(mstp, {setAvailableCategory})(AppContainer);
