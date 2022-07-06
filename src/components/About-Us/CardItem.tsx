import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'
import useStyles from './style'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import { DataAboutUs } from './type'
/**
 * Item Card Component
 *
 * Version 1.0
 *
 * Date: 06-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 06-07-2022         TuanLA           Create
 */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minWidth: 288,
}))


export default function CardItem({ name, position, birthday, university, social }: DataAboutUs) {
  const classes = useStyles()
  return (
    <Item>
      <Card>
        <CardHeader className={classes.cardHeader} />
        <Grid container direction='column' alignItems='center' justifyContent='center'>
          <Avatar
            alt='Remy Sharp'
            src='https://www.linkpicture.com/q/TuanLA.jpg'
            className={classes.avatar}
          />
        </Grid>
        <CardContent className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {position}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {birthday}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {university}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Stack direction='row' spacing={1}>
              <IconButton color='primary' aria-label='facebook' href={social.facebook} size="large">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label='github' href={social.github} size="large">
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Grid>
        </CardActions>
      </Card>
    </Item>
  )
}
