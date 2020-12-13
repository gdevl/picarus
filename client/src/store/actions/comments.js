import { backendUrl } from "../../config";
export const ADD_COMMENT = "picarus/comments/ADD_COMMENT";

export const addComment = (comment) => ({ type: ADD_COMMENT, comment });

export const createComment = () => async (dispatch) => {
  // debugger;
  const response = await fetch(`${backendUrl}/api/comments`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: {},
  });

  if (response.ok) {
    const res = await response.json();
    // console.log(res)
    dispatch(addComment(res));
  }
};
