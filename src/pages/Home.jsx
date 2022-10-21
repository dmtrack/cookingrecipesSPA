import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  getCategoriesIsLoading,
  getCategoriesList,
} from "../components/store/slices/categoriesSlice";
import { Preloader } from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";

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
        categories && <CategoryList catalog={categories}/>

      )}
    </>
  );
}

export { Home };
