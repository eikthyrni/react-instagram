export const ActionTypes = {
    INC_LIKES: 'INCREMENT_LIKES',
    ADD_COMMENT: 'ADD_COMMENT',
    ADD_POST: 'ADD_POST',
    CHANGE_VIEW: 'CHANGE_VIEW',
    EDIT_NAME: 'EDIT_NAME',
    EDIT_AVATAR: 'EDIT_AVATAR'
};

export function incrementLikes(postID) {
    return { type: ActionTypes.INC_LIKES, payload: postID }
}

export function addComment(postID, text) {
    return { type: ActionTypes.ADD_COMMENT, payload: { postID: postID, text: text } }
}

export function addPost() {
    return { type: ActionTypes.ADD_POST }
}

export function changeView(view) {
    return { type: ActionTypes.CHANGE_VIEW, payload: view }
}

export function editUserName(name) {
    return { type: ActionTypes.EDIT_NAME, payload: name }
}

export function editUserAvatar(avatar) {
    return { type: ActionTypes.EDIT_AVATAR, payload: avatar }
}