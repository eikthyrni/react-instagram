const initialState = {
    name: 'defaultUserName'
};

function user(state = initialState, action) {
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
}

export default user;