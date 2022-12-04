// imports

// actions
const ADD_NEW_TASK = "toDo/today/ADD_NEW_TASK";
const SET_TASK_MODE = "toDo/today/SET_TASK_MODE";
const SET_CURRENT_TODOS = "toDo/today/SET_CURRENT_TODOS";
const CREATE_NEW_TODO = "toDo/today/CREATE_NEW_TODO";

// initial state
const initialState = {
    sections: [
        {
            name: "home",
            id: 0,
            tasks: {
                today: [
                    {id: 0, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 1, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2, message: 'Buy the milk', time: '14:00 am', isDone: false},
                ],
                tomorrow: [
                    {id: 3, message: 'buy new car', time: '04:00 pm', isDone: false},
                    {id: 4, message: 'buy new car2', time: '04:00 pm', isDone: false},
                    {id: 5, message: 'buy new car3', time: '04:00 pm', isDone: false},
                ],
                week: [],
            }
        },
        {
            name: "work",
            id: 1,
            tasks: {
                today: [
                    {id: 0, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 1, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 25, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 52, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2351, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 234, message: 'Buy the milk', time: '14:00 am', isDone: false},
                ],
                tomorrow: [
                    {id: 3, message: 'buy new car', time: '04:00 pm', isDone: false},
                    {id: 43, message: 'buy new car2', time: '04:00 pm', isDone: false},
                    {id: 512, message: 'buy new car3', time: '04:00 pm', isDone: false},
                ],
                week: [],
            }
        },
        {
            name: 'gym',
            id: 2,
            tasks: {
                today: [
                    {id: 0, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 1, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 3, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 4, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 5, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 6, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 7, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 8, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 9, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 10, message: 'Walk the dog', time: '12:00 am', isDone: true},
                ],
                tomorrow: [
                    {id: 11, message: 'buy new car', time: '04:00 pm', isDone: false},
                    {id: 12, message: 'buy new car2', time: '04:00 pm', isDone: false},
                    {id: 13, message: 'buy new car3', time: '04:00 pm', isDone: false},
                    {id: 14, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 15, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 16, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 17, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 18, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 19, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 20, message: 'Walk the dog', time: '12:00 am', isDone: true},
                ],
                week: [],
            }
        },
        // add here from home
    ],
    currentTodos: null,
    currentTodosNum: null,
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
            return {...state, sections: [...state.sections, {name: action.name, id: 3,  tasks: {}}]}
        default:
            return state;
    }
}

// actionsCreator
export const addNewTask = (message, time) => ({type: ADD_NEW_TASK, message, time});
export const setTaskMode = (sectionId, taskId, mode) => ({type: SET_TASK_MODE, sectionId, taskId, mode});
export const setCurrentTodos = (name, number) => ({type: SET_CURRENT_TODOS, name, number});
export const createNewTodo = (name) => ({type: CREATE_NEW_TODO, name});

// thunkCreator
// export const taskModeChanger = (sectionId, taskId, mode) => dispatch => {
//         dispatch(setTaskModeToday(sectionId, taskId));
// }


// export
export default tasksReducer;