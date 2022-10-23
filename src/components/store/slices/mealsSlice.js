import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getFilteredCategory } from "../../../api";

const initialState = {
  entities: null,
  loading: false,
};

const mealsSlice = createSlice({
  name: "meals",
  loading: false,
  initialState: initialState,
  reducers: {
    mealsRequested(state) {
      state.loading = true;
    },
    getMeals(state, action) {
      state.entities = action.payload;
      state.loading = false;
    },
  },
});

export const { mealsRequested, getMeals } = mealsSlice.actions;

export function fetchMeals(name) {
  return async function (dispatch) {
    dispatch(mealsRequested);
    try {
      const content = await getFilteredCategory(name).then(
        (data) => data.meals
      );
      dispatch(getMeals(content));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const getMealsList = () => (state) => state.meals.entities;
export const getMealsIsLoading = () => (state) => state.meals.loading;

export default mealsSlice.reducer;
