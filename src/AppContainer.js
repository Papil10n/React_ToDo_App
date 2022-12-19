import './App.scss';
import React from "react";
import {setAvailableCategory} from "./redux/task-reducer";
import {connect} from "react-redux";
import App from "./App";

class AppCont extends React.Component {
    componentDidMount() {
        this.props.setAvailableCategory();
    }

    render() {
        return <App isNewCategoryCreating={this.props.isNewCategoryCreating}
                    watchingCategory={this.props.watchingCategory}/>
    }
}

const mstp = (state) => {
    return {
        isNewCategoryCreating: state.tasksReducer.isNewCategoryCreating,
        watchingCategory: state.tasksReducer.watchingCategory,
        isNewTaskCreating: state.tasksReducer.isNewTaskCreating,
    }
}

const AppContainer = connect(mstp, {setAvailableCategory})(AppCont);

export default AppContainer;
