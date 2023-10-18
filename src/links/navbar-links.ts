import Home from "../components/home";
import Profile from "../components/profile";
import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

export const paths = {
  SignUp: `/sign-up`,
  SignIn: "/sign-in",
  Profile: "/profile",
  HomePage: "",
};

export interface NavLinkProps {
  title: string;
  path: string;
  component: () => JSX.Element;
}

export const navLinks = [
  { title: `Sign Up`, path: paths.SignUp, component: SignUp },
  { title: "Sign In", path: paths.SignIn, component: SignIn },
  { title: "Profile", path: paths.Profile, component: Profile },
  { title: "Home", path: paths.HomePage, component: Home },
] as NavLinkProps[];
