// imports
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import tasksReducer from "./task-reducer";

const reducers = combineReducers({
    tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunk));

window.__store__ = store;

export default store;