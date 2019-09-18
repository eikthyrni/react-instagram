import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/User';
import FiltersReducer from './reducers/Filters';
import PostsReducer from './reducers/Posts';

const reducers = {
    user: UserReducer,
    filters: FiltersReducer,
    posts: PostsReducer,
};

export default createStore(combineReducers(reducers));