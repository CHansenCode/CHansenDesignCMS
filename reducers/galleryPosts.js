import { CREATE, FETCH_ALL, DELETE } from "../constants/actionTypes";

const GalleryPosts = (galleryPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...galleryPosts, action.payload];
    case DELETE:
      return galleryPosts.filter((post) => post._id !== action.payload);
    default:
      return galleryPosts;
  }
};

export default GalleryPosts;
