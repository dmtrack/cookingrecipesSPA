import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  getCategoriesIsLoading,
  getCategoriesList,
} from "../components/store/slices/categoriesSlice";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { getAllCategories } from "../api";
import { Search } from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  console.log(navigate, "navigate");
  const categories = useSelector(getCategoriesList());
  const loading = useSelector(getCategoriesIsLoading());
  useEffect(() => {
    dispatch(fetchCategories());
    getAllCategories().then((data) => {
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  const [filteredCatalog, setFilteredCatalog] = useState();
  const handleSearch = (str) => {
    setFilteredCatalog(
      categories.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate(`?search=${str}`);
  };

  return (
    <>
      <Search cb={handleSearch} />
      <h1>Categories</h1>
      {loading ? (
        <Preloader />
      ) : (
        categories && <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export { Home };
