import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getArchProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createArchProject = (archProject) => async (dispatch) => {
  try {
    const { data } = await api.createArchProject(archProject);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateArchProject = (id, archProject) => async (dispatch) => {
  try {
    const { data } = await api.updateArchProject(id, archProject);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArchProject = (id) => async (dispatch) => {
  try {
    await api.deleteArchProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
