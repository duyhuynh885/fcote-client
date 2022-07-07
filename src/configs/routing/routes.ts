import AboutUs from '../../modules/statics/about-us/AboutUs'
import ForgetPassword from '../../modules/authentication/forget-password/ForgetPassword'
import Login from '../../modules/authentication/login/Login'
import Register from '../../modules/authentication/register/Register'
import Challenge from '../../modules/challenge/list/Challenge'
import ChallengeDetail from '../../modules/challenge/detail/ChallengeDetail'
import ContactUs from '../../modules/statics/contact-us/ContactUs'
import CreateAssignment from '../../modules/assignment/create/CreateAssignment'
import CreateChallenge from '../../modules/challenge/create/CreateChallenge'
import DetailAssignment from '../../modules/assignment/detail/DetailAssignment'
import Forbidden from '../../modules/statics/errors/Forbidden'
import NotFound from '../../modules/statics/errors/NotFound'
import ServerError from '../../modules/statics/errors/ServerError'
import Home from '../../modules/home/Home'
import ListAssignment from '../../modules/assignment/list/ListAssignment'
import MyProfile from '../../modules/my-profile/view/MyProfile'
import Ranking from '../../modules/ranking/Ranking'
import DetailGroup from '../../modules/group/detail/DetailGroup'
import Group from '../../modules/group/list/Group'

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
    path: '/',
    Component: Home,
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
    title: 'FORBIDDEN',
    path: '/forbidden',
    Component: Forbidden,
    exact: true,
  },
  {
    auth: false,
    title: 'NOT FOUND',
    path: '/not-found',
    Component: NotFound,
    exact: true,
  },
  {
    auth: false,
    title: 'SERVER ERROR',
    path: '/server-error',
    Component: ServerError,
    exact: true,
  },
  {
    title: 'Ranking',
    path: '/ranking',
    Component: Ranking,
    exact: true,
  },
  {
    title: 'Challenge',
    path: '/challenge',
    Component: Challenge,
    exact: true,
  },
  {
    title: 'Challenge Detail',
    path: '/challenge/detail',
    Component: ChallengeDetail,
    exact: true,
  },
  {
    title: 'Create Challenge',
    path: '/challenge/create',
    Component: CreateChallenge,
    exact: true,
  },
  {
    title: 'Group',
    path: '/group',
    Component: Group,
    exact: true,
  },
  {
    title: 'Group',
    path: '/group/detail',
    Component: DetailGroup,
    exact: true,
  },
]

export default routes
