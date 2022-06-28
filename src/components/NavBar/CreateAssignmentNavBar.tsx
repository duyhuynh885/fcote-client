import React from 'react'
import useStyles from './style'
import { AppBar, Toolbar, Typography } from '@mui/material'
import ButtonBack from '../Button/ButtonBack'

export default function CreateAssignmentNavBar() {
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
        <Typography className={classes.toolbar}>New Assignment</Typography>
        <span></span>
      </Toolbar>
    </AppBar>
  )
}
