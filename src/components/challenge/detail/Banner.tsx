import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Detail } from '../../../modules/challenge/detail/type'
import useStyles from './style'

interface BannerProps {
  detail: Detail
}

export default function Banner(props: BannerProps) {
  const { detail } = props
  const classes = useStyles()
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        width: '90%',
        height: '30vh',
        margin: '0 auto',
        marginTop: '30px',
        backgroundColor: '#ffff',
      }}
    >
      <img
        className={classes.challengeCardBanner}
        src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'
      />
      <Stack
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        sx={{ height: '100%', width: '100%', padding: '20px 50px' }}
      >
        <Stack direction='column' sx={{ height: '75%', width: '100%' }}>
          <Stack direction='column' alignItems='center' sx={{ height: '60%', width: '100%' }}>
            <Typography>{detail.title}</Typography>
            <Typography>{detail.description}</Typography>
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{ height: '40%', width: '100%' }}
          >
            <Stack direction='column' alignItems='center'>
              <Typography>{detail.title}</Typography>
              <Typography>{detail.description}</Typography>
            </Stack>
            <Stack direction='column' alignItems='center'>
              <Typography>{detail.title}</Typography>
              <Typography>{detail.description}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{ height: '25%', width: '100%', borderTop: '1px solid gray', padding: 3 }}
          direction='row'
          justifyContent='space-around'
          spacing={2}
        >
          <Stack direction='row' spacing={1}>
            <Typography>Total participants: </Typography>
            <Typography>3</Typography>
            <Typography>members</Typography>
          </Stack>
          <Typography>IN PROGRESS</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
