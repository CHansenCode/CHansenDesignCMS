import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getBudgetPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getBudgetPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createBudgetPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createBudgetPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateBudgetPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateBudgetPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteBudgetPost = (id) => async (dispatch) => {
  try {
    await api.deleteBudgetPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
