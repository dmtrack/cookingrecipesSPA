import { useParams, useNavigate } from "react-router-dom";

function Recipe(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const {
    strMeal,
    strCategory,
    strMealThumb,
    strInstructions,
    idMeal,
    strYoutube,
    strTags,
  } = props;

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
          <span className="card-title" style={{ color: "ghostwhite" }}>
            {strMeal}
          </span>
        </div>
        <div className="card-content">
          <p>{strInstructions}</p>
        </div>
      </div>
    </>
  );
}

export { Recipe };
