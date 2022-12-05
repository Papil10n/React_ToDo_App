import './App.scss';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePageContainer from "./component/HomePage/HomePage";
import TodoContainer from "./component/Todo/Todo";
import NewTodos from "./component/NewTodos/NewTodos";
import NewTodosContainer from "./component/NewTodos/NewTodos";
import NewTask from "./component/NewTask/NewTask";
import NewTaskContainer from "./component/NewTask/NewTask";


function App() {
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

export default App;
