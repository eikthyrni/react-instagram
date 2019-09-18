import cat1 from '../../../src/images/pic1.png';
import cat2 from '../../../src/images/pic2.png';
import cat3 from '../../../src/images/pic3.jpg';
import noPic from '../../../src/images/no-avatar.png';

const initialState = {
    0: {
        pic: cat1,
        likes: 5,
        comments: {
            0: 'ъеъе',
            1: 'бууъъъ'
        }
    },
    1: {
        pic: cat2,
        likes: 153,
        comments: []
    },
    2: {
        pic: cat3,
        likes: 12,
        comments: []
    }
};

function getLastRecordID(object) {
    return Object.keys(object).slice(-1)[0];
}

function posts(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            const lastPostID = getLastRecordID(state);
            return {
                ...state,
                [lastPostID + 1]: {
                    pic: noPic,
                    likes: 0,
                    comments: []
                }
            };
        case 'INCREMENT_LIKES':
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    likes: state[action.payload].likes + 1
                }
            };
        case 'ADD_COMMENT':
            const lastCommentID = getLastRecordID(state[action.payload.id].comments);
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    comments: {
                        ...state[action.payload.id].comments,
                        [lastCommentID + 1]: action.payload.text
                    }
                }
            };
        default:
            return state
    }
}

export default posts;