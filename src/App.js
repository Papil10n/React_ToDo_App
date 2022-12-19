import './App.scss';
import React from "react";
import NewTodosContainer from "./component/NewTodos/NewTodos";
import HomePageContainer from "./component/HomePage/HomePageContainer";


const App = (props) => {
    return (
        <div className="app">
            <div className="app__container">
                <div className='app__wrap'>
                    {props.isNewCategoryCreating ? <NewTodosContainer/> : <HomePageContainer/>}
                </div>
            </div>
        </div>
    )
}


export default App;
