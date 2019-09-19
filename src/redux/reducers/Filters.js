import { ActionTypes } from '../../actions';

const initialState = {
    view: 'list'
};

function filters(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_VIEW:
            return {
                ...state,
                view: action.payload,
            };
        default:
            return state
    }
}

export default filters;