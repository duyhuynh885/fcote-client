import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Gold } from '../../../assets/Gold.svg'
import { ReactComponent as Platinum } from '../../../assets/Platinum.svg'
import { ReactComponent as Bronze } from '../../../assets/Bronze.svg'
import useStyles from '../style'
import { IAssignmentCompleted } from '../../../modules/my-profile/view/type'
import { useTranslation } from 'react-i18next'

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

interface AssignmentCompletedProps {
  assCompleted: IAssignmentCompleted
}
const AssignmentCompleted: React.FC<AssignmentCompletedProps> = (props) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Paper
      elevation={4}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>{t('AssignmentCompleted')}</Typography>
        </Box>
        <Box>
          <Grid container spacing={20} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <Gold className={classes.assignmentWardIcon} />
                <Typography className={classes.assignmentWardTitle}>{t('Hard')}</Typography>
                <Typography>{props.assCompleted.numberAssignmentCompletedFollowHard}</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <Platinum className={classes.assignmentWardIcon} />
                <Typography className={classes.assignmentWardTitle}>{t('Medium')}</Typography>
                <Typography>{props.assCompleted.numberAssignmentCompletedFollowMedium}</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <Bronze className={classes.assignmentWardIcon} />
                <Typography className={classes.assignmentWardTitle}>{t('Easy')}</Typography>
                <Typography>{props.assCompleted.numberAssignmentCompletedFollowEasy}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Paper square className={classes.assignmentTotalScoreContainer}>
          <Typography className={classes.assignmentTotalScore}>
            {props.assCompleted.totalScore}
          </Typography>
        </Paper>
      </Stack>
    </Paper>
  )
}

export default AssignmentCompleted
