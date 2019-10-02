import { cat1, cat2, cat3, noPic } from '../../constants';
import { ActionTypes } from '../../actions';

const initialState = [
    {
        id: 0,
        pic: cat1,
        likes: 5,
        comments: [
            {
                id: 0,
                text: 'ъеъе'
            },
            {
                id: 1,
                text:'бууъъъ'
            }
        ]
    },
    {
        id: 1,
        pic: cat2,
        likes: 153,
        comments: []
    },
    {
        id: 2,
        pic: cat3,
        likes: 12,
        comments: []
    }
];

function getLastRecordID(array) {
    return array.length ? array[array.length-1].id : 0;
}

function posts(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            const lastPostID = getLastRecordID(state);

            return [
                ...state,
                {
                    id: lastPostID + 1,
                    pic: noPic,
                    likes: 0,
                    comments: []
                }
            ];
        case ActionTypes.INC_LIKES:
            state.forEach((item, index) => {
                if (index === action.payload) {
                    item.likes++;
                }
            });
            return [...state];
        case ActionTypes.ADD_COMMENT:
            state.forEach((item, index) => {
                if (index === action.payload.postID) {
                    const lastCommentID = getLastRecordID(item.comments);

                    item.comments = [
                        ...item.comments,
                        {
                            id: lastCommentID + 1,
                            text: action.payload.text
                        }]
                }
            });
            return [...state];
        default:
            return state
    }
}

export default posts;