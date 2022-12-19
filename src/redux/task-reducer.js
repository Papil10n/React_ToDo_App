// imports
import {
    findAndDeleteCategory,
    setCategory,
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


// initial state
const initialState = {
    categoryes: [],
    watchingCategory: null,
    categoryMode: null,
    isNewCategoryCreating: false,
    isNewTaskCreating: false,
}


// reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_MODE:
            return {
                ...state, categoryes: [...taskModeRefresh(state.categoryes, action.name, action.mode, action.message)]
            }
        case SET_WATCHING_CATEGORY:
            return {...state, watchingCategory: action.name}
        case IS_SET_NEW_TASK_MODE:
            return {...state, isNewTaskCreating: action.mode}
        case WATCHING_CATEGORY_MODE:
            return {...state, categoryMode: action.mode}
        case CREATE_NEW_CATEGORY:
            return {
                ...state,
                categoryes: [...state.categoryes, setCategory(action.name)]
            }
        case CREATE_NEW_TASK:
            return {
                ...state,
                sections: [...state.sections.map(s => {
                    if (s.id === action.sectionID) {
                        const task = {id: action.id, message: action.taskMessage, time: action.taskTime, isDone: false}
                        if (s.tasks.all.length) {
                            s.tasks.all = [...s.tasks.all, task]
                        } else {
                            s.tasks.all = [task]
                        }

                    }
                    return s;
                })]
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
export const createNewTask = (sectionID, taskMessage, taskTime, id) => ({
    type: CREATE_NEW_TASK,
    sectionID,
    taskMessage,
    taskTime,
    id
})
export const setCurrentDateWatching = (date) => ({type: SET_CURRENT_DATE_WATCHING, date});
export const createNewCategory = (name) => ({type: CREATE_NEW_CATEGORY, name});
export const setAvailableCategory = () => ({type: SET_AVAILABLE_CATEGORY});
export const deleteCategory = (name) => ({type: DELETE_CATEGORY, name});
export const settingWatchingCategory = (name) => ({type: SET_WATCHING_CATEGORY, name});
export const watchingCategoryMode = (mode) => ({type: WATCHING_CATEGORY_MODE, mode})
export const setTaskMode = (name, mode, message) => ({type: SET_TASK_MODE, name, mode, message});
export const setNewCategoryCreatingMode = (mode) => ({type: SET_NEW_CATEGORY_CREATING_MODE, mode});
export const changeNewTaskMode = (mode) => ({type: IS_SET_NEW_TASK_MODE, mode});


// export
export default tasksReducer;