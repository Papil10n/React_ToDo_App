// imports
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import todayReducer from "./today-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    today: todayReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;