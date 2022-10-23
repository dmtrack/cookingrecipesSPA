import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getFilteredCategory,
  getMealById,
} from "../../../api";

const initialState = {
  entities: null,
  loading: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  loading: false,
  initialState: initialState,
  reducers: {
    recipeRequested(state) {
      state.loading = true;
    },
    getRecipe(state, action) {
      state.entities = action.payload;
      state.loading = false;
    },
  },
});

export const { recipeRequested, getRecipe } = recipeSlice.actions;

export function fetchRecipe(id) {
  return async function (dispatch) {
    dispatch(recipeRequested);
    try {
      const content = await getMealById(id).then((data) => data.meals[0]);
      dispatch(getRecipe(content));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const getRecipeList = () => (state) => state.recipe.entities;
export const getRecipeIsLoading = () => (state) => state.recipe.loading;

export default recipeSlice.reducer;
