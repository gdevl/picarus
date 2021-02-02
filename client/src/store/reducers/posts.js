import {
    SET_POSTS,
    ADD_POST,
    REMOVE_POST,
    SET_CURRENT_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    ADD_POST_LIKE,
    REMOVE_POST_LIKE,
} from '../actions/posts';

const initialState = {
    currentPostId: null,
    ids: [],
    // currentUserLikesCurrentPost: null,
};

export default function reducer(state = initialState, action) {
    let nextState = { ...state };
    //   debugger;
    switch (action.type) {
        case SET_POSTS:
            // debugger
            return {
                ...action.posts,
                ids: Object.keys(action.posts),
                // postLikes: Object.keys(action.)
            };
        case ADD_POST:
            nextState[action.post.id] = action.post;
            nextState[action.post.id].Comments = [];
            nextState[action.post.id].PostLikes = [];
            nextState.ids.push(action.post.id.toString());
            return nextState;
        case REMOVE_POST:
            delete nextState.posts[action.postId];
            nextState.ids = nextState.ids.filter(
                (id) => Number(id) !== Number(action.postId)
            );
            return nextState;
        case SET_CURRENT_POST:
            nextState.currentPostId = Number(action.postId);
            return nextState;
        case ADD_COMMENT:
            nextState[action.comment.pid].Comments.push(action.comment);
            return nextState;
        case ADD_POST_LIKE:
            nextState[action.postLike.pid].PostLikes.push(action.postLike);
            return nextState;
        case REMOVE_COMMENT:
            let prevComments = nextState[action.comment.pid].Comments;
            nextState[action.comment.pid].Comments = prevComments.filter(
                (comment) => comment.id !== action.comment.id
            );
            return nextState;
        case REMOVE_POST_LIKE:
            let prevLikes = nextState[action.postLike.pid].PostLikes;
            nextState[action.postLike.pid].PostLikes = prevLikes.filter(
                (postLike) => postLike.id !== action.postLike.id
            );
            return nextState;
        default:
            return state;
    }
}
