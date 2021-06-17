import {
  FETCH_ALL,
  CREATE,
  AUTH,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

//GET
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//LOGIN
export const authUser = (formData) => async (dispatch) => {
  try {
    const data = await api.authUser(formData);

    dispatch({ type: AUTH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
