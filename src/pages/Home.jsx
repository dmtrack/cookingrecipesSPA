import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  getCategoriesIsLoading,
  getCategoriesList,
} from "../components/store/slices/categoriesSlice";
import { Preloader } from "../components/Preloader";

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesList());
  const loading = useSelector(getCategoriesIsLoading());
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <h1>Categories</h1>
      {loading ? (
        <Preloader />
      ) : (
        categories &&
        categories.map((category) => (
          <p key={category.idCategory}>{category.strCategory}</p>
        ))
      )}
    </>
  );
}

export { Home };
