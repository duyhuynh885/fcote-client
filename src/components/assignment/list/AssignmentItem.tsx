import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AssignmentItemStyle from './style'
import RegularButton from '../../../components/common/button/RegularButton'
import { Assignment, DifficultEnum } from '../../../modules/assignment/list/type'
import history from '../../../configs/routing/history'
import { formatDate } from '../../../utils/dateUtil'

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

const AssignmentItem: React.FC<AssignmentItemProps> = (props) => {
  const classes = AssignmentItemStyle()
  const { assignment } = props
  const handleViewDetailAssignment = () => {
    history.push('/assignment/' + assignment.id)
  }

  return (
    <Paper elevation={8} square className={classes.container}>
      <Stack direction='column' spacing={0.5}>
        <Typography className={classes.name}>{assignment.title}</Typography>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <Avatar alt='Nguyen Tan Huy' src={assignment.image} />
          <Typography className={classes.userName}>{assignment.createdBy}</Typography>
        </Stack>
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <Typography className={classes.state}>{formatDate(assignment.createdAt)}</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          {/* <Typography className={classes.state}>{assignment.status}</Typography> */}
          <Typography className={classes.state}>SOLVED</Typography>
          <Typography className={classes.level}>{DifficultEnum[assignment.difficulty]}</Typography>
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
