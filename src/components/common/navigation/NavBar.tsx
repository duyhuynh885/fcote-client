import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { logoutRequest } from '../../../modules/authentication/logout/action'
import { isAuth } from '../../../utils/auth'
import ChangLanguage from '../button/ChangeLanguage'
import LogoBand from '../icon/LogoBand'
import useStyles from './style'

/**
 * Navbar components
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

const pages = [
  {
    path: '/my-profile',
    title: 'MyProfile',
    icon: <PermIdentityOutlinedIcon fontSize='small' sx={{ marginRight: '3px' }} />,
  },
  {
    path: '/assignment',
    title: 'Assignment',
    icon: <AssignmentOutlinedIcon fontSize='small' sx={{ marginRight: '3px' }} />,
  },
  {
    path: '/challenge',
    title: 'Challenge',
    icon: <WhatshotOutlinedIcon fontSize='small' sx={{ marginRight: '3px' }} />,
  },
  {
    path: '/group',
    title: 'Group',
    icon: <GroupOutlinedIcon fontSize='small' sx={{ marginRight: '3px' }} />,
  },
  {
    path: '/ranking',
    title: 'Ranking',
    icon: <MilitaryTechOutlinedIcon fontSize='small' sx={{ marginRight: '3px' }} />,
  },
]

function Navbar() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const loginIsSuccess = useSelector((state: RootState) => state.login.successful)
  const userInfo = useSelector((state: RootState) => state.login.userInfo)
  const myProfileState = useSelector((state: RootState) => state.myProfile)

  /**
   * Handle open user menu
   * @param event React.MouseEvent<HTMLElement>
   */
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  /**
   * Handle close user menu
   */
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  /**
   * Handle logout user
   */
  const handleLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <AppBar position='sticky' className={classes.navBar}>
      <Toolbar>
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'>
          <LogoBand />
        </NavLink>
        {!isAuth() && !loginIsSuccess ? (
          <React.Fragment>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <NavLink to='/about-us' activeClassName={classes.isActive} className={classes.link}>
                {t('AboutUs')}
              </NavLink>
              <NavLink to='/contact-us' activeClassName={classes.isActive} className={classes.link}>
                {t('ContactUs')}
              </NavLink>
            </Box>
            <ChangLanguage />
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <NavLink
                activeClassName={classes.isActiveAuthenticationButton}
                className={`${classes.button} ${classes.registerBtn}`}
                to='/register'
              >
                {t('Register')}
              </NavLink>
              <NavLink
                activeClassName={classes.isActiveAuthenticationButton}
                className={`${classes.button} ${classes.loginBtn}`}
                to='/login'
              >
                {t('Login')}
              </NavLink>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavLink
                  activeClassName={classes.isActive}
                  key={page.path}
                  to={page.path}
                  className={classes.link}
                >
                  {page.icon} {t(page.title)}
                </NavLink>
              ))}
            </Box>
            <ChangLanguage />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={myProfileState.user.avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <NavLink to='my-profile' className={`${classes.textDropdown}`}>
                    My Profile
                  </NavLink>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu()
                    handleLogout()
                  }}
                >
                  <Typography className={classes.textDropdown}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
