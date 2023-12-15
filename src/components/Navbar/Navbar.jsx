/* eslint-disable react/prop-types */
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar({user}) {

  const navigate = useNavigate()
  const getLoginPage = () => {
    navigate("/login")


  }

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to={"/"}>
            Home
          </NavLink>

        </li>
        <li>

          <NavLink to={"/about"}>
            About
          </NavLink>
        </li>
        <li>

          <NavLink to={"/tasks"}>
            Tasks
          </NavLink>
        </li>

        <li>

          <button onClick={getLoginPage}>
            Login

          </button>

        </li>
      </ul>
      <h2>{user.email}</h2>

    </nav>
  )
}

export default Navbar
