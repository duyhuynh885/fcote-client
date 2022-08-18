import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

import { Assignment, DifficultEnum } from '../../../modules/assignment/list/type'
import { mapDifficultyAssignment } from '../../../utils/mapper'
import Difficultly from '../../common/text/Difficultly'

import useStyles from './style'

/**
 * My Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-06-2022      HuyNT2711           Create
 * 24-06-2022      DuyHV               Update UI
 */

export enum TypeAssignmentItemRectangleEnum {
  LIST_ASSIGNMENT,
  SELECTED_ASSIGNMENT,
  HOME_ASSIGNMENT,
}

interface AssignmentItemRectangleProps {
  assignment: Assignment
  type?: TypeAssignmentItemRectangleEnum
}

export default function AssignmentItemRectangle(props: AssignmentItemRectangleProps) {
  const { assignment, type } = props
  const classes = useStyles()
  return (
    <div>
      <Paper square className={classes.paperWrap} elevation={0}>
        <Grid container alignItems='center'>
          <Grid item xs={5}>
            <Typography className={classes.name}>{assignment.title}</Typography>
          </Grid>
          {type === TypeAssignmentItemRectangleEnum.LIST_ASSIGNMENT ||
          type === TypeAssignmentItemRectangleEnum.HOME_ASSIGNMENT ? (
            <React.Fragment>
              <Grid item xs={3}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Avatar
                    alt='Avatar'
                    src={'https://picsum.photos/200'}
                    className={classes.avatar}
                  />
                  <Typography className={classes.userName}>{assignment.createdBy}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.score}>{assignment.score}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Difficultly
                  difficult={mapDifficultyAssignment(assignment.difficulty)}
                  displayText={DifficultEnum[assignment.difficulty]}
                />
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={5}>
                <Typography className={classes.score}>{assignment.score}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Difficultly
                  difficult={mapDifficultyAssignment(assignment.difficulty)}
                  displayText={DifficultEnum[assignment.difficulty]}
                />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Paper>
    </div>
  )
}
