const initialState = {
    view: 'list'
};

function filters(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            const newView = action.payload;
            return {
                ...state,
                view: newView,
            };
        default:
            return state
    }
}

export default filters;