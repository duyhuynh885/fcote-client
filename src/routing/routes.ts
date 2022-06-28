import CreateAssignment from '../components/Assignment/CreateAssignment/CreateAssignment'
import AboutUs from '../pages/AboutUs/AboutUs'
import ChangePassword from '../pages/Authentication/ChangePassword'
import ForgetPassword from '../pages/Authentication/ForgetPassword'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ContactUs from '../pages/ContactUs/ContactUs'
import DetailAssignment from '../pages/DetailAssignment'
import Home from '../pages/Home/Home'
import ListAssignment from '../pages/ListAssignment/ListAssignment'
import MyListAssignment from '../pages/MyListAssignment/MyListAssignment'
import MyProfile from '../pages/MyProfile/MyProfile'
import Ranking from '../pages/Ranking/Ranking'
/**
 * Setup routing for project
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */
const routes = [
  {
    auth: false,
    title: 'LOGIN',
    path: '/login',
    Component: Login,
    exact: true,
  },
  {
    auth: false,
    title: 'REGISTER',
    path: '/register',
    Component: Register,
    exact: true,
  },
  {
    auth: false,
    title: 'CHANGE PASSWORD',
    path: '/change-password',
    Component: ChangePassword,
    exact: true,
  },
  {
    auth: false,
    title: 'FORGET PASSWORD',
    path: '/forget-password',
    Component: ForgetPassword,
    exact: true,
  },
  {
    auth: false,
    title: 'ABOUT US',
    path: '/about-us',
    Component: AboutUs,
    exact: true,
  },
  {
    auth: false,
    title: 'CONTACT US',
    path: '/contact-us',
    Component: ContactUs,
    exact: true,
  },
  {
    auth: true,
    title: 'HOME',
    path: '/home',
    Component: Home,
    exact: true,
  },
  {
    auth: true,
    title: 'My Assignment',
    path: '/my-assignment',
    Component: MyListAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'Assignment',
    path: '/assignment',
    Component: ListAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'Detail Assignment',
    path: '/detail-assignment',
    Component: DetailAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'Create Assignment',
    path: '/assignment/create',
    Component: CreateAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'MY PROFILE',
    path: '/my-profile',
    Component: MyProfile,
    exact: false,
  },
  {
    auth: false,
    title: 'Ranking',
    path: '/ranking',
    Component: Ranking,
    exact: true,
  },
]

export default routes
