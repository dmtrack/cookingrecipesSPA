import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="N/A transparent navbar-fixed">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" style={{ color: "black" }}>
          cookingRecipes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about" style={{ color: "black" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts" style={{ color: "black" }}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
