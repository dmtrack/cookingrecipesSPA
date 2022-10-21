import {configureStore} from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";

export default configureStore ({
 reducer: {categories: categoriesReducer}
})
