import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/nav-bar";
import { NavLinkProps, navLinks } from "./links/navbar-links";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>{navLinks.map((props) => getComponent(props))}</Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

function getComponent(props: NavLinkProps) {
  const { path, component, title } = props;
  return <Route path={path} Component={component} key={title} />;
}

export default App;
