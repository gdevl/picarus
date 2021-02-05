import { backendUrl } from '../../config';
export const TOKEN_KEY = 'picarus/authentication/token';
export const SET_TOKEN = 'picarus/authentication/SET_TOKEN';
export const REMOVE_TOKEN = 'picarus/authentication/REMOVE_TOKEN';
export const ADD_USER = 'picarus/authentication/ADD_USER';
export const SET_FOLLOWS = 'picarus/authentication/SET_FOLLOWS';
export const SET_MY_POSTS = 'picarus/authentication/SET_MY_POSTS';

export const addUser = (user) => ({ type: ADD_USER, user });
export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setToken = (token, id, displayName, email) => ({
    type: SET_TOKEN,
    token,
    id,
    displayName,
    email,
});
export const setFollows = (follows) => ({ type: SET_FOLLOWS, follows });
export const setMyPosts = (myPosts) => ({ type: SET_MY_POSTS, myPosts });

export const loadToken = () => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        const userId = window.localStorage.getItem('userId');
        dispatch(setToken(token));
        const request = await fetch(`${backendUrl}/api/users/${userId}`);
        if (request.ok) {
            const user = await request.json();
            dispatch(addUser(user));
        }
    }
};

export const login = (email, password) => async (dispatch) => {
    const request = await fetch(`${backendUrl}/api/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (request.ok) {
        const { token, user } = await request.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem('userId', user.id);
        dispatch(setToken(token, user.id, user.displayName, user.email));
    }
};

export const logout = () => async (dispatch) => {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem('userId');
    dispatch(removeToken());
};

export const register = (
    displayName,
    email,
    password,
    confirmPassword
) => async (dispatch) => {
    const request = await fetch(`api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName, email, password, confirmPassword }),
    });
    if (request.ok) {
        const { token, user } = await request.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem('userId', user.id);
        dispatch(setToken(token, user.id, user.displayName, user.email));
    }
};

export const fetchFollows = (userId) => async (dispatch) => {
    const request = await fetch(`${backendUrl}/api/users/${userId}/following`, {
        headers: { 'Content-Type': 'application/json' },
    });
    if (request.ok) {
        const follows = await request.json();
        dispatch(setFollows(follows));
    }
};

export const fetchMyPosts = (userId) => async (dispatch) => {
    const request = await fetch(`${backendUrl}/api/users/${userId}/posts`, {
        headers: { 'Content-Type': 'application/json' },
    });
    if (request.ok) {
        const myPosts = await request.json();
        dispatch(setMyPosts(myPosts));
    }
};
