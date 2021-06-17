import { CREATE, FETCH_ALL, AUTH } from "../constants/actionTypes";

const Users = (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...users, action.payload];

    case AUTH:
      return action.payload;

    default:
      return users;
  }
};

export default Users;

// return users.filter((user) => user._id !== action.payload);
