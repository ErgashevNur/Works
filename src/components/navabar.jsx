// rrd imports
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">Technologist</Link>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          <i class="fa-solid fa-house"></i>Home
        </NavLink>

        <NavLink
          to="/Work"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          <i class="fa-brands fa-android"></i>Work
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          <i class="fa-solid fa-bookmark"></i> Blok
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          <i class="fa-solid fa-phone"></i> Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
