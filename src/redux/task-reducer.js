// imports
import {findAndDeleteCategory, setCategory, showCategoryes} from "../LocalStorage/LS";

// actions

const SET_TASK_MODE = "toDo/tasks/SET_TASK_MODE";
const SET_CURRENT_TODOS = "toDo/tasks/SET_CURRENT_TODOS";
const CREATE_NEW_TODO = "toDo/tasks/CREATE_NEW_TODO";
const SET_CURRENT_DATE_WATCHING = "toDo/tasks/SET_CURRENT_DATE_WATCHING";
const CREATE_NEW_TASK = "toDo/tasks/CREATE_NEW_TASK";
const IS_SET_NEW_TASK_MODE = "toDo/tasks/IS_SET_NEW_TASK_MODE";
const NEW_TODO_CREATING = "toDo/tasks/NEW_TODO_CREATING";

const SET_AVAILABLE_CATEGORY = "toDo/tasks/SET_AVAILABLE_CATEGORY";
const DELETE_CATEGORY = "toDo/tasks/DELETE_CATEGORY";


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

    currentTodos: null,
    currentTodosNum: null,
    currentDateWatching: null,
    sectionsLength: null,
    isSetNewTaskMode: false,
    isNewTodoCreating: false,
}


// reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_MODE:
            return {
                ...state, sections: [...state.sections.map(s => {
                    if (s.id === action.sectionId) {
                        s.tasks[action.mode].map(task => {
                            if (task.id === action.taskId) {
                                task.isDone = !task.isDone;
                            }
                        })
                    }
                    return s
                })]
            }
        case SET_CURRENT_TODOS:
            return {...state, currentTodos: action.name, currentTodosNum: action.number}
        case CREATE_NEW_TODO:
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
        case SET_CURRENT_DATE_WATCHING:
            return {...state, currentDateWatching: action.date}
        case IS_SET_NEW_TASK_MODE:
            return {...state, isSetNewTaskMode: action.mode}
        case NEW_TODO_CREATING:
            return {...state, isNewTodoCreating: action.mode}

        case SET_AVAILABLE_CATEGORY:
            return {...state, categoryes: showCategoryes()}
        case DELETE_CATEGORY:
            return {...state, categoryes: findAndDeleteCategory(action.name)}
        default:
            return state;
    }
}

// actionsCreator
export const setTaskMode = (sectionId, taskId, mode) => ({type: SET_TASK_MODE, sectionId, taskId, mode});
export const setCurrentTodos = (name, number) => ({type: SET_CURRENT_TODOS, name, number});
export const createNewTodo = (name) => ({type: CREATE_NEW_TODO, name});
export const createNewTask = (sectionID, taskMessage, taskTime, id) => ({
    type: CREATE_NEW_TASK,
    sectionID,
    taskMessage,
    taskTime,
    id
})
export const setCurrentDateWatching = (date) => ({type: SET_CURRENT_DATE_WATCHING, date});
export const changeNewTaskMode = (mode) => ({type: IS_SET_NEW_TASK_MODE, mode});
export const isNewTodoCreating = (mode) => ({type: NEW_TODO_CREATING, mode});

export const setAvailableCategory = () => ({type: SET_AVAILABLE_CATEGORY});
export const deleteCategory = (name) => ({type: DELETE_CATEGORY, name});

// thunkCreator
// export const taskModeChanger = (sectionId, taskId, mode) => dispatch => {
//         dispatch(setTaskModeToday(sectionId, taskId));
// }


// export
export default tasksReducer;