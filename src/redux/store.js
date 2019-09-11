import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/User'

const reducers = {
    user: UserReducer
};

export default createStore(combineReducers(reducers));