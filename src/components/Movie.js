import { useParams, useNavigate, useLocation } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  console.log(id);
  const value2 = useLocation();
  // console.log(value);
  console.log(value2);

  const navigate = useNavigate();
  const goBack = () => navigate("/contacts");

  return (
    <>
      <h1>Some movie {id}</h1>
      <button onClick={() => navigate(-1)}>go back! </button>
    </>
  );
}

export { Movie };
