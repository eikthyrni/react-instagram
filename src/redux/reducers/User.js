import { noPic } from '../../constants';
import { ActionTypes } from '../../actions';

const initialState = {
    name: 'defaultUserName',
    avatar: noPic
};

function user(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.EDIT_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case ActionTypes.EDIT_AVATAR:
            return {
                ...state,
                avatar: action.payload,
            };
        default:
            return state
    }
}

export default user;