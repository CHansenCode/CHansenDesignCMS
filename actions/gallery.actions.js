import { FETCH_ALL, CREATE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getGallery = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGallery();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createGalleryPost = (galleryPost) => async (dispatch) => {
  try {
    const { data } = await api.createGalleryPost(galleryPost);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateGalleryPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateGalleryPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteGalleryPost = (id) => async (dispatch) => {
  try {
    await api.deleteGalleryPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
