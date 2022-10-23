import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../../api";

const initialState = {
  entities: null,
  loading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  loading: false,
  initialState: initialState,
  reducers: {
    categoriesRequested(state) {
      state.loading = true;
    },

    getCategories(state, action) {
      state.entities = action.payload;
      state.loading = false;
    },
  },
});

export const { categoriesRequested, getCategories } = categoriesSlice.actions;

export function fetchCategories() {
  return async function (dispatch) {
    dispatch(categoriesRequested);
    try {
      const content = await getAllCategories().then((data) => data.categories);
      dispatch(getCategories(content));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const getCategoriesList = () => (state) => state.categories.entities;
export const getCategoriesIsLoading = () => (state) => state.categories.loading;

export default categoriesSlice.reducer;
