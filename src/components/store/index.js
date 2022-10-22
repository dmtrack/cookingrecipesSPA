import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import mealsSlice from "./slices/mealsSlice";

export default configureStore({
  reducer: { categories: categoriesReducer, meals: mealsSlice },
});
