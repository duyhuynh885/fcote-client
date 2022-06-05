import App from "../app/App";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ListAssignment from "../pages/ListAssignment/ListAssignment";
import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";
import { PATHS } from "./path";

const routes = [
  {
    title: "HOME",
    path: PATHS.HOME_PATH,
    Component: App,
    exact: true,
    roles: [],
  },
  {
    title: "ABOUT US",
    path: PATHS.ABOUT_US_PATH,
    Component: AboutUs,
    exact: true,
    roles: [],
  },
  {
    title: "CONTACT US",
    path: PATHS.CONTACT_US_PATH,
    Component: ContactUs,
    exact: true,
    roles: [],
  },
  {
    title: "Assignment",
    path: PATHS.ASSIGNMENT_PATH,
    Component: ListAssignment,
    exact: true,
    roles: [],
  },
  {
    title: "My List Assignment ",
    path: PATHS.My_ASSIGNMENT_PATH,
    Component: MyListAssignment,
    exact: true,
    roles: [],
  },
];

export default routes;
