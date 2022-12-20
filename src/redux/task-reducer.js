// imports
import {
    findAndDeleteCategory, getNonDeletedTask, saveNewUserName,
    setCategory, setNewTaskToLS,
    showCategoryes,
    taskModeRefresh,
} from "../LocalStorage/LS";

// actions
const SET_TASK_MODE = "toDo/tasks/SET_TASK_MODE";
const SET_CURRENT_DATE_WATCHING = "toDo/tasks/SET_CURRENT_DATE_WATCHING";
const CREATE_NEW_TASK = "toDo/tasks/CREATE_NEW_TASK";
const SET_AVAILABLE_CATEGORY = "toDo/tasks/SET_AVAILABLE_CATEGORY";
const DELETE_CATEGORY = "toDo/tasks/DELETE_CATEGORY";
const SET_WATCHING_CATEGORY = "toDo/tasks/SET_WATCHING_CATEGORY";
const WATCHING_CATEGORY_MODE = "toDo/tasks/WATCHING_CATEGORY_MODE";
const CREATE_NEW_CATEGORY = "toDo/tasks/CREATE_NEW_CATEGORY";
const SET_NEW_CATEGORY_CREATING_MODE = "toDo/tasks/SET_NEW_CATEGORY_CREATING_MODE";
const IS_SET_NEW_TASK_MODE = "toDo/tasks/IS_SET_NEW_TASK_MODE";
const IS_POPUP_SHOWING = "toDo/tasks/IS_POPUP_SHOWING";
const CHANGE_USERNAME = "toDo/tasks/CHANGE_USERNAME";
const DELETE_TASK = "toDo/tasks/DELETE_TASK";



// initial state
const initialState = {
    userName: null,
    categoryes: [],
    watchingCategory: null,
    categoryMode: null,
    isNewCategoryCreating: false,
    isNewTaskCreating: false,
    isPopUpShowing: false,
}


// reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_MODE:
            return {
                ...state, categoryes: [...taskModeRefresh(state.categoryes, action.name, action.message)]
            }
        case SET_WATCHING_CATEGORY:
            return {...state, watchingCategory: action.name}
        case IS_SET_NEW_TASK_MODE:
            return {...state, isNewTaskCreating: action.mode}
        case WATCHING_CATEGORY_MODE:
            return {...state, categoryMode: action.mode}
        case IS_POPUP_SHOWING:
            return {...state, isPopUpShowing: action.mode}
        case CHANGE_USERNAME:
            return {...state, userName: saveNewUserName(action.username)}
        case CREATE_NEW_CATEGORY:
            return {
                ...state,
                categoryes: [...state.categoryes, setCategory(action.name)]
            }
        case CREATE_NEW_TASK:
            return {
                ...state,
                categoryes: [...setNewTaskToLS(state.categoryes, action.name, action.message, action.time)]
            }
        case DELETE_TASK:
            return {
                ...state,
                categoryes: [...getNonDeletedTask(state.categoryes, action.cName, action.tMessage)]
            }
        case SET_NEW_CATEGORY_CREATING_MODE:
            return {...state, isNewCategoryCreating: action.mode}
        case SET_AVAILABLE_CATEGORY:
            return {...state, categoryes: showCategoryes()}
        case DELETE_CATEGORY:
            return {...state, categoryes: findAndDeleteCategory(action.name)}
        default:
            return state;
    }
}

// actionsCreator
export const createNewTask = (name, message, time) => ({type: CREATE_NEW_TASK,name,message,time});
export const setCurrentDateWatching = (date) => ({type: SET_CURRENT_DATE_WATCHING, date});
export const createNewCategory = (name) => ({type: CREATE_NEW_CATEGORY, name});
export const setAvailableCategory = () => ({type: SET_AVAILABLE_CATEGORY});
export const deleteCategory = (name) => ({type: DELETE_CATEGORY, name});
export const settingWatchingCategory = (name) => ({type: SET_WATCHING_CATEGORY, name});
export const watchingCategoryMode = (mode) => ({type: WATCHING_CATEGORY_MODE, mode})
export const setTaskMode = (name, message) => ({type: SET_TASK_MODE, name, message});
export const setNewCategoryCreatingMode = (mode) => ({type: SET_NEW_CATEGORY_CREATING_MODE, mode});
export const changeNewTaskMode = (mode) => ({type: IS_SET_NEW_TASK_MODE, mode});
export const setToMountPopUp = (mode) => ({type: IS_POPUP_SHOWING, mode});
export const setNewUserName = (username) => ({type: CHANGE_USERNAME, username});
export const deleteTask = (cName, tMessage) => ({type: DELETE_TASK, cName, tMessage});


// export
export default tasksReducer;