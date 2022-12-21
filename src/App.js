import './App.scss';
import React from "react";
import HomePageContainer from "./component/HomePage/HomePageContainer";
import NewTodosContainer from "./component/NewTodos/NewTodosContainer";


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
