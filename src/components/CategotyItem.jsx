import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
        <span className="card-title" style={{ color: "saddlebrown" }}></span>
      </div>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`category/${strCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
