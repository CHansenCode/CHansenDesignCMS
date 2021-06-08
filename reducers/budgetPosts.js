import { CREATE, FETCH_ALL, DELETE } from "../constants/actionTypes";

const BudgetPosts = (budgetPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...budgetPosts, action.paylaod];
    case DELETE:
      return budgetPosts.filter((post) => post._id !== action.payload);
    default:
      return budgetPosts;
  }
};

export default BudgetPosts;
