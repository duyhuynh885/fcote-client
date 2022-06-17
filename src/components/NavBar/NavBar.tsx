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
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { logoutRequest } from '../../redux/modules/auth/action/authAction'

const pages = [
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
    title: 'Raking',
  },
]

function Navbar() {
  const classes = useStyles()
  const { t } = useTranslation()
  const settings = ['My Profile', 'Account', 'Logout']
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)
  const { successful } = auth

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <AppBar position='sticky' className={classes.navBar}>
      <Toolbar>
        <LogoBand />
        {!isAuth() && !successful ? (
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
              {pages.map(page => (
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
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>Logoutssss</MenuItem>
              </Menu>
            </Box>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
