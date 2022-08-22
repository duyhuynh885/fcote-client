import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AssignmentItemStyle from './style'
import RegularButton from '../../../components/common/button/RegularButton'
import { Assignment, DifficultEnum, StatusEnum } from '../../../modules/assignment/list/type'
import history from '../../../configs/routing/history'
import { formatDate } from '../../../utils/dateUtil'
import Difficultly from '../../common/text/Difficultly'
import Status from '../../common/text/Status'
import { mapStatusAssignment, mapDifficultyAssignment } from '../../../utils/mapper'
import DefaultAvatar from '../../../assets/DefaultAvatar.png'

/**
 * Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 24-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 03-06-2022      HuyNT2711           Create
 * 24-06-2022      DuyHV               Update UI
 */

interface AssignmentItemProps {
  assignment: Assignment
}

const AssignmentItem = (props: AssignmentItemProps) => {
  const classes = AssignmentItemStyle()
  const { assignment } = props
  const handleViewDetailAssignment = () => {
    history.push('/assignment/' + assignment.id)
  }

  return (
    <Paper elevation={2} square className={classes.container}>
      <Stack direction='column' spacing={0.5}>
        <Typography className={classes.name}>{assignment.title}</Typography>
        <Stack direction='row' alignItems='center' spacing={1} className={classes.wrapAvatarName}>
          <Avatar alt='Avatar' src={assignment.image ?? DefaultAvatar} className={classes.avatar} />
          <Typography className={classes.userName}>{assignment.createdBy}</Typography>
        </Stack>
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <Typography className={classes.date}>{formatDate(assignment.createdAt)}</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Status
            status={mapStatusAssignment(assignment.status)}
            displayText={StatusEnum[assignment.status]}
          ></Status>
          <Difficultly
            difficult={mapDifficultyAssignment(assignment.difficulty)}
            displayText={DifficultEnum[assignment.difficulty]}
          />
        </Stack>
        <Stack>
          <RegularButton
            color={'primary'}
            size={'sm'}
            round={false}
            fullWidth={false}
            disabled={false}
            simple={false}
            block={false}
            link={false}
            justIcon={false}
            className={''}
            onClick={handleViewDetailAssignment}
          >
            View Assignment
          </RegularButton>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default AssignmentItem
