import React from 'react'
import useStyles from './style'
import { AppBar, Toolbar, Typography } from '@mui/material'
import ButtonBack from '../button/ButtonBack'

interface InsideNavBarProps {
  namePage: string
}

export default function InsideNavBar(props: InsideNavBarProps) {
  const classes = useStyles()

  return (
    <AppBar position='sticky' className={classes.navBarCreate}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ButtonBack />
        <Typography className={classes.toolbar}>{props.namePage}</Typography>
        <span></span>
      </Toolbar>
    </AppBar>
  )
}