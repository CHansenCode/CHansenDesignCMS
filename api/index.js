import axios from "axios";

import { galleryAPI, architectureProjectsAPI } from "../config";

export const fetchArchProjects = () => axios.get(architectureProjectsAPI);
export const createArchProject = (newArchProject) =>
  axios.post(architectureProjectsAPI, newArchProject);
export const updateArchProject = (id, updatedArchProject) =>
  axios.patch(`${architectureProjectsAPI}/${id}`, updatedArchProject);
export const deleteArchProject = (id) =>
  axios.delete(`${architectureProjectsAPI}/${id}`);

export const fetchGallery = () => axios.get(galleryAPI);
export const createGalleryPost = (data) => axios.post(galleryAPI, data);
export const updateGalleryPost = (id, updatedGalleryPost) =>
  axios.patch(`${galleryAPI}/${id}`, updatedGalleryPost);
export const deleteGalleryPost = (id) => axios.delete(`${galleryAPI}/${id}`);
