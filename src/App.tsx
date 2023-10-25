import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/nav-bar";
import { allLinks, NavLinkProps } from "./links/navbar-links";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import InstagramLogin from "./components/instagram-login";
import FacebookLogin from "./components/facebook-login";
import { isAuth } from "./services/authService";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>{allLinks.map((props) => getComponent(props))}</Routes>
        <ToastContainer />
        {!isAuth() ? (
          <>
            <InstagramLogin />
            <FacebookLogin />
          </>
        ) : (
          <></>
        )}
      </div>
    </Router>
  );
};

function getComponent(props: NavLinkProps) {
  const { path, component, title } = props;
  return <Route path={path} Component={component} key={title} />;
}

export default App;
