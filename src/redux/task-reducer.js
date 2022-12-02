// imports

// actions
const ADD_NEW_TASK = "toDo/today/ADD_NEW_TASK";
const SET_TASK_MODE_TODAY = "toDo/today/SET_TASK_MODE_TODAY";
const SET_CURRENT_TODOS = "toDo/today/SET_CURRENT_TODOS";


// initial state
const initialState = {
    sections: {
        home: {
            tasks: {
                today: [
                    {id: 0, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 1, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2, message: 'Buy the milk', time: '14:00 am', isDone: false},
                ],
                tomorrow: [
                    {id: 3, message: 'buy new car', time: '04:00 pm', isDone: false},
                    {id: 43, message: 'buy new car2', time: '04:00 pm', isDone: false},
                    {id: 512, message: 'buy new car3', time: '04:00 pm', isDone: false},
                ],
                week: [],
            }
        },
        work: {
            tasks: {
                today: [
                    {id: 0, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 1, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 25, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 2351, message: 'Walk the dog', time: '12:00 am', isDone: true},
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
        gym: {
            tasks: {
                today: [
                    {id: 0, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 1, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 25, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 2351, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2351, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 234, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 1242, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 232, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 255, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 235871, message: 'Walk the dog', time: '12:00 am', isDone: true},
                ],
                tomorrow: [
                    {id: 3, message: 'buy new car', time: '04:00 pm', isDone: false},
                    {id: 43, message: 'buy new car2', time: '04:00 pm', isDone: false},
                    {id: 512, message: 'buy new car3', time: '04:00 pm', isDone: false},
                    {id: 2351, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 2353, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 234, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 1242, message: 'Walk the dog', time: '12:00 am', isDone: true},
                    {id: 232, message: 'Buy the milk', time: '14:00 am', isDone: false},
                    {id: 255, message: 'Do homework', time: '10:00 am', isDone: false},
                    {id: 235871, message: 'Walk the dog', time: '12:00 am', isDone: true},
                ],
                week: [],
            }
        },
        // add here from home
    },
    currentTodos: null,
}


// reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                todayTasks: [...state.todayTasks, {id: 3, message: action.message, time: action.time}]
            }
        case SET_TASK_MODE_TODAY:
            return {
                ...state, todayTasks: [...state.todayTasks.map(task => {
                    if (task.id === action.taskId) {
                        task.isDone ? task.isDone = false : task.isDone = true;
                    }
                    return task
                })]
            }
        case SET_CURRENT_TODOS:
            return {...state, currentTodos: action.todos}
        default:
            return state;
    }
}

// actionsCreator
export const addNewTask = (message, time) => ({type: ADD_NEW_TASK, message, time});
export const setTaskModeToday = (taskId) => ({type: SET_TASK_MODE_TODAY, taskId});
export const setCurrentTodos = (todos) => ({type: SET_CURRENT_TODOS, todos});

// export
export default tasksReducer;