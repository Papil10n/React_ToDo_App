import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navigates from "./Navigates/Navigate";
import TasksContainer from "./TasksContainer/TasksContainer";


const Todo = ({settingWatchingCategory, watchingCategory, watchingCategoryMode, changeNewTaskMode}) => {
    return (
        <div>
            <Header settingWatchingCategory={settingWatchingCategory}/>
            <Navigates watchingCategory={watchingCategory} watchingCategoryMode={watchingCategoryMode}/>
            <div className="app__main">
                <TasksContainer/>
            </div>
            <Footer changeNewTaskMode={changeNewTaskMode}/>
        </div>
    )
}


export default Todo;