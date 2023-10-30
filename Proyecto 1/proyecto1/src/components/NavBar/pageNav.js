import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/homepage">Homepage</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
