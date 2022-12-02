import './App.scss';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePageContainer from "./component/HomePage/HomePage";
import TodoContainer from "./component/Todo/Todo";


const NewTask = (props) => {
    return (<div>new task</div>)
}

function App() {
    return (
        <div className="app">
            <div className="app__container">
                <div className='app__wrap'>
                    <Routes>
                        <Route path='/' element={<Navigate to='/todo'/>}/>
                        <Route path='/todo' element={<HomePageContainer/>}/>
                        <Route path='/todo/*' element={<TodoContainer />}/>
                        <Route path='/new_task' element={<NewTask/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default App;
