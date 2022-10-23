import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import mealsSlice from "./slices/mealsSlice";
import recipeSlice from "./slices/recipeSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    meals: mealsSlice,
    recipe: recipeSlice,
  },
});
