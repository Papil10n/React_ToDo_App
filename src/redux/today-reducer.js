// imports

// actions
const ADD_NEW_TASK = "toDo/today/ADD_NEW_TASK";
const SET_TASK_MODE = "toDo/today/SET_TASK_MODE";

// initial state
const initialState = {
    tasks: [
        {id:0, message: 'Do homework', time: '10:00 am', isDone: false},
        {id:1, message: 'Walk the dog', time: '12:00 am', isDone: true},
        {id:2, message: 'Buy the milk', time: '14:00 am', isDone: false},
    ]
}


// reducer
const todayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {id:3, message: action.message, time: action.time}]}
        case SET_TASK_MODE:
            return {
                ...state, tasks: [...state.tasks.map(task => {
                    if (task.id === action.taskId) {
                        task.isDone ? task.isDone = false : task.isDone = true;
                    }
                    return task
                } )]
            }
        default:
            return state;
    }
}

// actionsCreator
export const addNewTask = (message, time) => ({type: ADD_NEW_TASK, message, time});
export const setTaskMode = (taskId) => ({type: SET_TASK_MODE, taskId});

// exports
export default todayReducer;