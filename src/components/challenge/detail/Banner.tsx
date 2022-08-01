import { CircularProgress, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Detail } from '../../../modules/challenge/detail/type'
import useStyles from './style'
import StatusChallengeChallenge from '../../common/text/StatusChallenge'
import { mapStatusChallenge } from '../../../utils/mapper'
import DateChallenge from '../../common/text/DateChallenge'

interface BannerProps {
  detail: Detail
  requesting: boolean
}

export default function Banner(props: BannerProps) {
  const { detail, requesting } = props
  const classes = useStyles()

  return (
    <Paper square elevation={2} className={classes.container}>
      {requesting ? (
        <Stack
          marginTop={5}
          sx={{
            width: '100%',
          }}
          alignItems='center'
        >
          <CircularProgress color='success' />
        </Stack>
      ) : (
        <Stack
          sx={{ height: '100%' }}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <img
            className={classes.challengeCardBanner}
            src='https://img.freepik.com/premium-vector/programming-web-banner-with-engineer-work_88188-640.jpg?w=826'
          />
          <Stack direction='column' sx={{ height: '100%', width: '100%', padding: '0 50px' }}>
            <Stack direction='column' sx={{ height: '75%', width: '100%' }}>
              <Stack direction='column' alignItems='center' sx={{ height: '60%', width: '100%' }}>
                <Typography className={classes.bannerTitle}>{detail.title}</Typography>
                <Typography className={classes.bannerDescription}>{detail.description}</Typography>
              </Stack>
              <Grid container sx={{ height: '40%', width: '100%' }}>
                <Grid item xs={6}>
                  <Stack direction='row'>
                    <Typography className={classes.bannerTextTitle}>Duration:</Typography>
                    <DateChallenge startDate={detail.startAt} endDate={detail.endAt} />
                  </Stack>
                  <Stack direction='row'>
                    <Typography className={classes.bannerTextTitle}>Total Assignment:</Typography>
                    <Typography className={classes.bannerTextDescription}>
                      {detail.totalAssignment}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}  justifyContent='flex-start'>
                  <Stack direction='row'>
                    <Typography className={classes.bannerTextTitle}>Group:</Typography>
                    <Typography className={classes.bannerTextDescription}>
                      {detail.group}
                    </Typography>
                  </Stack>
                  <Stack direction='row'>
                    <Typography className={classes.bannerTextTitle}>Author:</Typography>
                    <Typography className={classes.bannerTextDescription}>
                      {detail.createdBy}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Divider variant='fullWidth' />
            <Grid
              sx={{ height: '25%', width: '100%' }}
             
              justifyContent='center'
              alignItems='center'
              columnSpacing={20}
              container
            >
              <Grid item xs={6}>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={0.5}>
                  <Typography className={classes.bannerFooterTextTitle}>
                    Total participants:
                  </Typography>
                  <Typography className={classes.bannerFooterTotalParticipial}>{detail.totalParticipial}</Typography>
                  <Typography className={classes.bannerFooterTextTitle}>members</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={0.5}>
                  <StatusChallengeChallenge {...mapStatusChallenge(detail.status)} size={'large'} />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      )}
    </Paper>
  )
}
