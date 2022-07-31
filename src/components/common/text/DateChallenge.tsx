import { Stack, Typography } from '@mui/material'
import React from 'react'
import { formatDateType2 } from '../../../utils/dateUtil'
import useStyles from './style'

interface DateChallengeProps {
  startDate: string
  endDate: string
}
export default function DateChallenge(props: DateChallengeProps) {
  const classes = useStyles()
  const { startDate, endDate } = props
  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={0.5}>
      <Typography className={classes.bannerTextStartDate}>{formatDateType2(startDate)}</Typography>
      <Typography className={classes.bannerTextDate}>to</Typography>
      <Typography className={classes.bannerTextEndDate}>{formatDateType2(endDate)}</Typography>
    </Stack>
  )
}
