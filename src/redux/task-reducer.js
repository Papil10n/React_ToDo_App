// imports

// actions
const ADD_NEW_TASK = "toDo/today/ADD_NEW_TASK";
const SET_TASK_MODE = "toDo/today/SET_TASK_MODE";
const SET_CURRENT_TODOS = "toDo/today/SET_CURRENT_TODOS";
const CREATE_NEW_TODO = "toDo/today/CREATE_NEW_TODO";
const SET_CURRENT_DATE_WATCHING = "toDo/today/SET_CURRENT_DATE_WATCHING";


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
        {
            name: "work",
            id: 1,
            tasks: {
                today: [],
                tomorrow: [],
                all: [
                    {id: 4, message: 'Do push-ups', time: '04/12/2022', isDone: false},
                    {id: 5, message: 'Play with cat', time: '04/12/2022', isDone: false},
                    {id: 6, message: 'Buy the milk', time: '05/12/2022', isDone: false},
                    {id: 7, message: 'Do homework', time: '05/12/2022', isDone: false},
                    {id: 8, message: 'Walk the dog', time: '06/12/2022', isDone: false},
                ],
            }
        },
        {
            name: 'gym',
            id: 2,
            tasks: {
                today: [],
                tomorrow: [],
                all: [
                    {id: 9, message: 'Buy the milk', time: '04/12/2022', isDone: false},
                    {id: 10, message: 'buy new car', time: '04/12/2022', isDone: false},
                    {id: 11, message: 'buy new car2', time: '04/12/2022', isDone: false},
                    {id: 15, message: 'buy new car3', time: '05/12/2022', isDone: false},
                ],
            }
        },
        // add here from home
    ],
    currentTodos: null,
    currentTodosNum: null,
    currentDateWatching: null,
    sectionsLength: null,
}


// reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                todayTasks: [...state.todayTasks, {id: 3, message: action.message, time: action.time}]
            }
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
            return {
                ...state,
                sections: [...state.sections, {name: action.name, id: 3, tasks: {today: {}, tomorrow: {}, all: {}}}]
            }
        case SET_CURRENT_DATE_WATCHING:
            return {...state, currentDateWatching: action.date}
        default:
            return state;
    }
}

// actionsCreator
export const addNewTask = (message, time) => ({type: ADD_NEW_TASK, message, time});
export const setTaskMode = (sectionId, taskId, mode) => ({type: SET_TASK_MODE, sectionId, taskId, mode});
export const setCurrentTodos = (name, number) => ({type: SET_CURRENT_TODOS, name, number});
export const createNewTodo = (name) => ({type: CREATE_NEW_TODO, name});
export const setCurrentDateWatching = (date) => ({type: SET_CURRENT_DATE_WATCHING, date});

// thunkCreator
// export const taskModeChanger = (sectionId, taskId, mode) => dispatch => {
//         dispatch(setTaskModeToday(sectionId, taskId));
// }


// export
export default tasksReducer;