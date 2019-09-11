import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
    name: 'defaultUserName'
};

const reducer = function user(state = initialState, action) {
    switch (action.type) {
        case 'EDIT_USER_NAME':
            const newUserName = action.payload;
            return {
                ...state,
                name: newUserName,
            };
        default:
            return state
    }
};

const store = createStore(reducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
