import noAvatar from '../../../src/images/no-avatar.png';

const initialState = {
    name: 'defaultUserName',
    avatar: noAvatar
};

function user(state = initialState, action) {
    switch (action.type) {
        case 'EDIT_NAME':
            const newName = action.payload;
            return {
                ...state,
                name: newName,
            };
        case 'EDIT_AVATAR':
            const newAvatar = action.payload;
            return {
                ...state,
                avatar: newAvatar,
            };
        default:
            return state
    }
}

export default user;