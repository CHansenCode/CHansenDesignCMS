import { combineReducers } from "redux";

import GalleryPosts from "./galleryPosts";
import BudgetPosts from "./budgetPosts";

export const reducers = combineReducers({ GalleryPosts, BudgetPosts });
