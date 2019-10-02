export const ActionTypes = {
    INC_LIKES: 'INCREMENT_LIKES',
    ADD_COMMENT: 'ADD_COMMENT',
    ADD_POST: 'ADD_POST',
    CHANGE_VIEW: 'CHANGE_VIEW',
    EDIT_NAME: 'EDIT_NAME',
    EDIT_AVATAR: 'EDIT_AVATAR'
};

export default {
    editUserName: (name) => {
        return { type: ActionTypes.EDIT_NAME, payload: name }
    },

    editUserAvatar: (avatar) => {
        return { type: ActionTypes.EDIT_AVATAR, payload: avatar }
    },

    changeView: (view) => {
        return { type: ActionTypes.CHANGE_VIEW, payload: view }
    },

    addPost: () => {
        return { type: ActionTypes.ADD_POST }
    },

    incrementLikes: (postID) => {
        return { type: ActionTypes.INC_LIKES, payload: postID }
    },

    addComment: (postID, text) => {
        return { type: ActionTypes.ADD_COMMENT, payload: { postID: postID, text: text } }
    }
}