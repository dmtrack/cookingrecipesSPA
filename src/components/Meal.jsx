import { Link } from "react-router-dom";

function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
        <span className="card-title" style={{ color: "ghostwhite" }}>
          {strMeal}
        </span>
      </div>
      <div className="card-content">
        {/*<p>{strCategoryDescription.slice(0, 60)}...</p>*/}
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export { Meal };
