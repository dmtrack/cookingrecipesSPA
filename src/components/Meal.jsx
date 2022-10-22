import { Link, useLocation } from "react-router-dom";

function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  const location = useLocation();
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
        <Link
          to={`${location.pathname}/${idMeal}`}
          props={{ data: `${location.pathname}` }}
          className="btn"
        >
          Watch meal
        </Link>
      </div>
    </div>
  );
}

export { Meal };
