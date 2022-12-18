import './App.scss';
import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import HomePageContainer from "./component/HomePage/HomePage";
import TodoContainer from "./component/Todo/Todo";
import NewTodos from "./component/NewTodos/NewTodos";
import NewTodosContainer from "./component/NewTodos/NewTodos";
import NewTask from "./component/NewTask/NewTask";
import NewTaskContainer from "./component/NewTask/NewTask";
import {setAvailableCategory} from "./redux/task-reducer";
import {connect} from "react-redux";


const App = (props) => {
    return (
        <div className="app">
            <div className="app__container">
                <div className='app__wrap'>
                    <Routes>
                        <Route path='/' element={<Navigate to='/todo'/>}/>
                        <Route path='/todo' element={<HomePageContainer/>}/>
                        <Route path='/todo/*' element={<TodoContainer />}/>
                        <Route path='/new_todo' element={<NewTodosContainer/>}/>
                        <Route path='/todo/new_task' element={<NewTaskContainer/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}

const mstp = (state) => {
    return {}
}

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.setAvailableCategory();
    }

    render() {
        return <App />
    }
}

export default connect(mstp, {setAvailableCategory})(AppContainer);
