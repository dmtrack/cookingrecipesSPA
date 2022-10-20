import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="#eceff1 blue-grey lighten-5 navbar-fixed">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" style={{ color: "#4db6ac" }}>
          Foodshop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about" style={{ color: "#4db6ac" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts" style={{ color: "#4db6ac" }}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
