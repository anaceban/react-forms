import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/nav-bar.css";
import { links, NavLinkProps, navLinks } from "../links/navbar-links";
import { isAuth, logOut } from "../services/authService";
import { MDBBtn } from "mdb-react-ui-kit";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/");
    logOut();
    alert("logout success");
  };
  return (
    <nav>
      <ul>
        {!isAuth()
          ? navLinks.map((props) => getComponent(props))
          : links.map((props) => getComponent(props))}
        {isAuth() ? <MDBBtn onClick={signOut}>Log Out</MDBBtn> : undefined}
      </ul>
    </nav>
  );
};

function getComponent(props: NavLinkProps) {
  const { path, title } = props;
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
}

export default NavigationBar;
