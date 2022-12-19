// imports
import {
    findAndDeleteCategory,
    setCategory, setCategoryMode,
    setWatchingCategory,
    showCategoryes,
    taskModeRefresh,
    TaskModeRefresh
} from "../LocalStorage/LS";

// actions

const SET_TASK_MODE = "toDo/tasks/SET_TASK_MODE";
const SET_CURRENT_DATE_WATCHING = "toDo/tasks/SET_CURRENT_DATE_WATCHING";
const CREATE_NEW_TASK = "toDo/tasks/CREATE_NEW_TASK";
const IS_SET_NEW_TASK_MODE = "toDo/tasks/IS_SET_NEW_TASK_MODE";

const SET_AVAILABLE_CATEGORY = "toDo/tasks/SET_AVAILABLE_CATEGORY";
const DELETE_CATEGORY = "toDo/tasks/DELETE_CATEGORY";
const SET_WATCHING_CATEGORY = "toDo/tasks/SET_WATCHING_CATEGORY";
const WATCHING_CATEGORY_MODE = "toDo/tasks/WATCHING_CATEGORY_MODE";
const CREATE_NEW_CATEGORY = "toDo/tasks/CREATE_NEW_CATEGORY";
const SET_NEW_CATEGORY_CREATING_MODE = "toDo/tasks/SET_NEW_CATEGORY_CREATING_MODE";


// initial state
const initialState = {
    sections: [
        {
            name: "home",
            id: 0,
            tasks: {
                today: [],
                tomorrow: [],
                all: [
                    {id: 0, message: 'Do homework', time: '04/12/2022', isDone: true},
                    {id: 1, message: 'Walk the dog', time: '05/12/2022', isDone: false},
                    {id: 2, message: 'Buy the milk', time: '05/12/2022', isDone: false},
                    {id: 3, message: 'Create store', time: '06/12/2022', isDone: false},
                ],
            }
        },
    ],


    categoryes: [],
    watchingCategory: null,
    categoryMode: null,
    isNewTodoCreating: false,



    sectionsLength: null,
}


// reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_MODE:
            return {
                ...state, categoryes: [...taskModeRefresh(state.categoryes, action.name, action.mode, action.message)]
            }
        case SET_WATCHING_CATEGORY:
            return {...state, watchingCategory: setWatchingCategory(action.name)}
        case WATCHING_CATEGORY_MODE:
            return {...state, categoryMode: setCategoryMode(action.mode)}

        case CREATE_NEW_CATEGORY:
            setCategory(action.name);
            return {
                ...state,
                sections: [...state.sections, {name: action.name, id: 3, tasks: {today: {}, tomorrow: {}, all: {}}}]
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
export const changeNewTaskMode = (mode) => ({type: IS_SET_NEW_TASK_MODE, mode});

export const createNewCategory = (name) => ({type: CREATE_NEW_CATEGORY, name});
export const setAvailableCategory = () => ({type: SET_AVAILABLE_CATEGORY});
export const deleteCategory = (name) => ({type: DELETE_CATEGORY, name});
export const settingWatchingCategory = (name) => ({type: SET_WATCHING_CATEGORY, name});
export const watchingCategoryMode = (mode) => ({type: WATCHING_CATEGORY_MODE, mode})
export const setTaskMode = (name, mode, message) => ({type: SET_TASK_MODE, name, mode, message});
export const setNewCategoryCreatingMode = (mode) => ({type: SET_NEW_CATEGORY_CREATING_MODE, mode});

// thunkCreator
// export const taskModeChanger = (sectionId, taskId, mode) => dispatch => {
//         dispatch(setTaskModeToday(sectionId, taskId));
// }


// export
export default tasksReducer;