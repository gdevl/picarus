import {
    SET_TOKEN,
    REMOVE_TOKEN,
    ADD_USER,
    SET_FOLLOWS,
    SET_MY_POSTS,
    ADD_MY_POST,
    ADD_FOLLOW,
    REMOVE_FOLLOW,
    SET_FOLLOWING_POSTS,
} from '../actions/authentication';

const initialState = {
    token: '',
    user: {
        id: '',
        displayName: '',
        email: '',
    },
    follows: [],
    followingPosts: [],
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
        case ADD_MY_POST:
            let nextPosts = [...state.myPosts];
            nextPosts.push(action.myPost.id);
            return {
                ...state,
                myPosts: [...nextPosts],
            };
        case ADD_FOLLOW:
            let nextFollows = [...state.follows];
            nextFollows.push(action.follow.uid);
            return {
                ...state,
                follows: [...nextFollows],
            };
        case REMOVE_FOLLOW:
            let prevFollows = [...state.follows];
            let newFollows = prevFollows.filter(
                (follow) => follow !== action.follow.uid
            );
            return {
                ...state,
                follows: [...newFollows],
            };
        case SET_FOLLOWING_POSTS:
            return {
                ...state,
                followingPosts: [...action.followingPosts],
            };
        default:
            return state;
    }
}
