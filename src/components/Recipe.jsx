import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchRecipe,
  getRecipeIsLoading,
  getRecipeList,
} from "./store/slices/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "./Preloader";

function Recipe(props) {
  const dispatch = useDispatch();
  const recipe = useSelector(getRecipeList());
  const loading = useSelector(getRecipeIsLoading());
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchRecipe(id));
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        recipe && (
          <div className="recipe">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
            <p>{recipe.strInstructions}</p>
            {recipe.strYouTube ? (
              <div className="row">
                <h5>Video recipe</h5>
                <iframe src={recipe.strYouTube} frameborder="0" />
              </div>
            ) : null}

            {/*<span className="card-title" style={{ color: "ghostwhite" }}>*/}
            {/*  {recipe.strMeal}*/}
            {/*</span>*/}
            {/*<div className="card-content">*/}
            {/*  <p>{recipe.strInstructions}</p>*/}
            {/*</div>*/}
          </div>
        )
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export { Recipe };
