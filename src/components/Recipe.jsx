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

            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Measure</th>
                </tr>
              </thead>

              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            {recipe.strYoutube ? (
              <div className="row">
                <h5 style={{ margin: "2rem 0 1.5rem" }}>Video recipe</h5>
                <iframe
                  title={recipe.strMeal}
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11
                  )}`}
                  allowFullScreen
                />
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
