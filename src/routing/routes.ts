import AboutUs from "../pages/AboutUs/AboutUs";
import ChangePassword from "../pages/Authentication/ChangePassword";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import { PATHS } from "./path";
import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";
import ListAssignment from "../pages/ListAssignment/ListAssignment";

const routes = [
  {
    auth: false,
    title: "LOGIN",
    path: "/login",
    Component: Login,
    exact: true,
  },
  {
    auth: false,
    title: "REGISTER",
    path: "/register",
    Component: Register,
    exact: true,
  },
  {
    auth: false,
    title: "CHANGE PASSWORD",
    path: "/change-password",
    Component: ChangePassword,
    exact: true,
  },
  {
    auth: false,
    title: "FORGET PASSWORD",
    path: "/forget-password",
    Component: ForgetPassword,
    exact: true,
  },
  {
    auth: false,
    title: "ABOUT US",
    path: "/about-us",
    Component: AboutUs,
    exact: true,
  },
  {
    auth: false,
    title: "CONTACT US",
    path: "/contact-us",
    Component: ContactUs,
    exact: true,
  },
  {
    auth: true,
    title: "HOME",
    path: "/home",
    Component: Home,
    exact: true,
  },
  {
    auth: true,
    title: "MyListAssignment",
    path: "/my-list-assignment",
    Component: MyListAssignment,
    exact: true,
  },
  {
    auth: true,
    title: "ListAssignment",
    path: "/list-assignment",
    Component: ListAssignment,
    exact: true,
  },
];

export default routes;
