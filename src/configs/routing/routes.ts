import AboutUs from '../../modules/statics/about-us/AboutUs'
import ForgetPassword from '../../modules/authentication/reset-password/ResetPassword'
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
import EditAssignment from '../../modules/assignment/edit/EditAssignment'

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
    title: 'LIST ASSIGNMENT',
    path: '/assignment',
    Component: ListAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'CREATE ASSIGNMENT',
    path: '/assignment/create',
    Component: CreateAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'UPDATE ASSIGNMENT',
    path: '/assignment/:assignmentId/update',
    Component: EditAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'DETAIL ASSIGNMENT',
    path: '/assignment/:assignmentId',
    Component: DetailAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'MY PROFILE',
    path: '/my-profile',
    Component: MyProfile,
    exact: true,
  },
  {
    auth: true,
    title: 'RANKING',
    path: '/ranking',
    Component: Ranking,
    exact: true,
  },
  {
    auth: true,
    title: 'CHALLENGE',
    path: '/challenge',
    Component: Challenge,
    exact: true,
  },
  {
    auth: true,
    title: 'CREATE CHALLENGE',
    path: '/challenge/create',
    Component: CreateChallenge,
    exact: true,
  },
  {
    auth: true,
    title: 'CHALLENGE DETAIL ASSIGNMENT DETAIL',
    path: '/challenge/:challengeId/assignment/:assignmentId',
    Component: DetailAssignment,
    exact: true,
  },
  {
    auth: true,
    title: 'CHALLENGE DETAIL',
    path: '/challenge/:challengeId',
    Component: ChallengeDetail,
    exact: true,
  },

  {
    auth: true,
    title: 'GROUP',
    path: '/group',
    Component: Group,
    exact: true,
  },
  {
    auth: true,
    title: 'GROUP DETAIL',
    path: '/group/:groupId',
    Component: DetailGroup,
    exact: true,
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
    title: 'SERVER ERROR',
    path: '/server-error',
    Component: ServerError,
    exact: true,
  },
  {
    auth: false,
    title: 'NOT FOUND',
    path: '/not-found',
    Component: NotFound,
    exact: true,
  },
]

export default routes
