import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const ArchProjects = (archProjects = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...archProjects, action.payload];
    case DELETE:
      return archProjects.filter((post) => post._id !== action.payload);
    default:
      return archProjects;
  }
};

export default ArchProjects;
