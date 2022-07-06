import React from 'react'
import useStyles from './style'
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
import { Link } from 'react-router-dom'
import LogoBand from '../Icons/LogoBand'
import { useTranslation } from 'react-i18next'
import ChangLanguage from '../Button/ChangeLanguage'
import { isAuth } from '../../utils/auth'
import { AppDispatch, RootState } from '../../app/ReduxContainer'
import { logoutRequest } from '../../redux/modules/auth/login/action'
import { useDispatch, useSelector } from 'react-redux'

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
  },
  {
    path: '/assignment',
    title: 'Assignment',
  },
  {
    path: '/challenge',
    title: 'Challenge',
  },
  {
    path: '/ranking',
    title: 'Ranking',
  },
]

function Navbar() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const loginIsSuccess = useSelector((state: RootState) => state.login.successful)

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
        <LogoBand />
        {!isAuth() && !loginIsSuccess ? (
          <React.Fragment>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to='/about-us' className={classes.link}>
                {t('AboutUs')}
              </Link>
              <Link to='/contact-us' className={classes.link}>
                {t('ContactUs')}
              </Link>
            </Box>
            <ChangLanguage />
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Link className={`${classes.button} ${classes.registerBtn}`} to='/register'>
                {t('Register')}
              </Link>
              <Link className={`${classes.button} ${classes.loginBtn}`} to='/login'>
                {t('Login')}
              </Link>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link key={page.path} to={page.path} className={classes.link}>
                  {t(page.title)}
                </Link>
              ))}
            </Box>
            <ChangLanguage />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
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
                  <Typography textAlign='center'>My Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>Account</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu()
                    handleLogout()
                  }}
                >
                  <Typography textAlign='center'>Logout</Typography>
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
