import FacebookLogin from "../components/facebook-login";
import Home from "../components/home";
import InstagramLogin from "../components/instagram-login";
import Profile from "../components/profile";
import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

export const paths = {
  SignUp: `/sign-up`,
  SignIn: "/sign-in",
  Profile: "/profile",
  HomePage: "",
  Facebook: "/facebook",
  Instagram: "/instagram",
};

export interface NavLinkProps {
  title: string;
  path: string;
  component: () => JSX.Element;
}

export const allLinks = [
  { title: `Sign Up`, path: paths.SignUp, component: SignUp },
  { title: "Sign In", path: paths.SignIn, component: SignIn },
  { title: "Home", path: paths.HomePage, component: Home },
  { title: "Facebook", path: paths.Facebook, component: FacebookLogin },
  { title: "Instagram", path: paths.Instagram, component: InstagramLogin },
  { title: "Profile", path: paths.Profile, component: Profile },
] as NavLinkProps[];

export const navLinks = [
  { title: "Home", path: paths.HomePage, component: Home },
] as NavLinkProps[];

export const links = [
  { title: "Profile", path: paths.Profile, component: Profile },
  { title: "Home", path: paths.HomePage, component: Home },
] as NavLinkProps[];
