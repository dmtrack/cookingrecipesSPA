import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Preloader } from "./Preloader";
import { MealList } from "./MealList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMeals,
  getMealsIsLoading,
  getMealsList,
} from "./store/slices/mealsSlice";

function Category() {
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMeals(name));
  }, [name]);
  const dispatch = useDispatch();
  const meals = useSelector(getMealsList());
  const loading = useSelector(getMealsIsLoading());

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
      {loading ? <Preloader /> : meals && <MealList meals={meals} />}
    </>
  );
}
export { Category };
