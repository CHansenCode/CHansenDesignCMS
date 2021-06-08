import axios from "axios";

import { galleryAPI, architectureProjectsAPI, budgetAPI } from "../config";

//ARCHITECTURAL PROJECTS API
export const fetchArchProjects = () => axios.get(architectureProjectsAPI);
export const fetchArchProject = () =>
  axios.get(`${architectureProjectsAPI}/${id}`);
export const createArchProject = (newArchProject) =>
  axios.post(architectureProjectsAPI, newArchProject);
export const updateArchProject = (id, updatedArchProject) =>
  axios.patch(`${architectureProjectsAPI}/${id}`, updatedArchProject);
export const deleteArchProject = (id) =>
  axios.delete(`${architectureProjectsAPI}/${id}`);

//GALLERY - MEDIA SERVER API
export const fetchGallery = () => axios.get(galleryAPI);
export const fetchGalleryPost = () => axios.get(`${galleryAPI}/${id}`);
export const createGalleryPost = (data) => axios.post(galleryAPI, data);
export const updateGalleryPost = (id, updatedGalleryPost) =>
  axios.patch(`${galleryAPI}/${id}`, updatedGalleryPost);
export const deleteGalleryPost = (id) => axios.delete(`${galleryAPI}/${id}`);

//BUDGET API
export const getBudgetPosts = () => axios.get(budgetAPI);
export const getBudgetPost = () => axios.get(`${budgetAPI}/${id}`);
export const createBudgetPost = (data) => axios.post(budgetAPI, data);
export const updateBudgetPost = (id, updatedBudgetPost) => {
  axios.patch(`${budgetAPI}/${id}`, updatedBudgetPost);
};
export const deleteBudgetPost = (id) => axios.delete(`${budgetAPI}/${id}`);
