import {
    SET_TOKEN,
    REMOVE_TOKEN,
    ADD_USER,
    SET_FOLLOWS,
    SET_MY_POSTS,
} from '../actions/authentication';

const initialState = {
    token: '',
    user: {
        id: '',
        displayName: '',
        email: '',
    },
    follows: [],
    myPosts: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
                user: {
                    id: action.id,
                    displayName: action.displayName,
                    email: action.email,
                },
            };
        case REMOVE_TOKEN:
            const newState = { ...state };
            delete newState.token;
            return newState;
        case ADD_USER:
            return { ...state, ...action.user };
        case SET_FOLLOWS:
            return {
                ...state,
                follows: [...action.follows],
            };
        case SET_MY_POSTS:
            return {
                ...state,
                myPosts: [...action.myPosts],
            };
        default:
            return state;
    }
}
