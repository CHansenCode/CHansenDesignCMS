import { combineReducers } from "redux";

import GalleryPosts from "./galleryPosts";
import BudgetPosts from "./budgetPosts";
import Users from "./users";

export const reducers = combineReducers({ GalleryPosts, BudgetPosts, Users });
