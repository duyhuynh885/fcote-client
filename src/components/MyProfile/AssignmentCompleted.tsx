import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Gold } from '../../asset/Gold.svg'
import { ReactComponent as Platinum } from '../../asset/Platinum.svg'
import { ReactComponent as Bronze } from '../../asset/Bronze.svg'
import useStyles from './style'

/**
 * Assignment completed component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
 */

export default function AssignmentCompleted() {
  const classes = useStyles()
  return (
    <Paper
      elevation={8}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>Assignment Completed</Typography>
        </Box>
        <Box>
          <Grid container spacing={20} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <Gold className={classes.assignmentWardIcon} />
                <Typography className={classes.assignmentWardTitle}>HARD</Typography>
                <Typography>12</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <Platinum className={classes.assignmentWardIcon} />
                <Typography className={classes.assignmentWardTitle}>MEDIUM</Typography>
                <Typography>12</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <Bronze className={classes.assignmentWardIcon} />
                <Typography className={classes.assignmentWardTitle}>EASY</Typography>
                <Typography>12</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Paper square className={classes.assignmentTotalScoreContainer}>
          <Typography className={classes.assignmentTotalScore}>Total Score: 20000</Typography>
        </Paper>
      </Stack>
    </Paper>
  )
}
