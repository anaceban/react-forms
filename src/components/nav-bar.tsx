import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav-bar.css";
import { NavLinkProps, navLinks } from "../links/navbar-links";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <ul>{navLinks.map((props) => getComponent(props))}</ul>
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
