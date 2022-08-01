import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { boolean, custom } from 'zod'
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
}
export enum CustomAssignmentItemRectangleEnum {
  CUSTOM_FOR_HOME,
}

interface AssignmentItemRectangleProps {
  assignment: Assignment
  type?: TypeAssignmentItemRectangleEnum
  custom?: CustomAssignmentItemRectangleEnum
}

export default function AssignmentItemRectangle(props: AssignmentItemRectangleProps) {
  const { assignment, type, custom } = props
  const classes = useStyles()
  return (
    <div>
      <Paper square className={classes.paperWrap} elevation={0}>
        <Stack
          direction='row'
          justifyContent={
            custom === CustomAssignmentItemRectangleEnum.CUSTOM_FOR_HOME ? 'start' : 'space-between'
          }
          alignItems='center'
        >
          <Typography
            className={
              custom === CustomAssignmentItemRectangleEnum.CUSTOM_FOR_HOME
                ? classes.nameCustom
                : classes.name
            }
          >
            {assignment.title}
          </Typography>
          {type === TypeAssignmentItemRectangleEnum.LIST_ASSIGNMENT ? (
            <React.Fragment>
              <Avatar alt='Avatar' src={'https://picsum.photos/200'} className={classes.avatar} />
              <Typography className={classes.userName}>{assignment.createdBy}</Typography>
              <Typography className={classes.score}>{assignment.score}</Typography>
              <Difficultly
                difficult={mapDifficultyAssignment(assignment.difficulty)}
                displayText={DifficultEnum[assignment.difficulty]}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography
                className={
                  custom === CustomAssignmentItemRectangleEnum.CUSTOM_FOR_HOME
                    ? classes.scoreCustom
                    : classes.score
                }
              >
                {assignment.score}
              </Typography>
              <Difficultly
                difficult={mapDifficultyAssignment(assignment.difficulty)}
                displayText={DifficultEnum[assignment.difficulty]}
              />
            </React.Fragment>
          )}
        </Stack>
      </Paper>
    </div>
  )
}
