import { backendUrl } from "../../config";
export const TOKEN_KEY = "picarus/authentication/token";
export const SET_TOKEN = "picarus/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "picarus/authentication/REMOVE_TOKEN";
export const ADD_USER = "picarus/authentication/ADD_USER";

export const addUser = (user) => ({ type: ADD_USER, user });
export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setToken = (token, id, displayName, email) => ({
  type: SET_TOKEN,
  token,
  id,
  displayName,
  email,
});

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    const userId = window.localStorage.getItem("userId");
    dispatch(setToken(token));
    const response = await fetch(`${backendUrl}/api/users/${userId}`);
    if (response.ok) {
      const user = await response.json();
      dispatch(addUser(user));
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  debugger;
  const response = await fetch(`${backendUrl}/api/users/signin`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, user } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem("userId", user.id);
    dispatch(setToken(token, user.id, user.displayName, user.email));
  }
};

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem("userId");
  dispatch(removeToken);
};

export const register = (
  displayName,
  email,
  password,
  confirmPassword
) => async (dispatch) => {
  const response = await fetch(`api/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ displayName, email, password, confirmPassword }),
  });
  if (response.ok) {
    const { token, user } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem("userId", user.id);
    dispatch(setToken(token, user.id, user.displayName, user.email));
  }
};
