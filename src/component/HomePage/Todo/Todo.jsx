import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navigates from "./Navigates/Navigate";
import TasksContainer from "./TasksContainer/TasksContainer";


const Todo = (props) => {
    return (
        <div>
            <Header settingWatchingCategory={props.settingWatchingCategory}/>
            <Navigates watchingCategory={props.watchingCategory} watchingCategoryMode={props.watchingCategoryMode}/>
            <div className="app__main">
                <TasksContainer/>
            </div>
            <Footer changeNewTaskMode={props.changeNewTaskMode}/>
        </div>
    )
}


export default Todo;